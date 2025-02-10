import { useEffect,useState } from "react"
import { auth } from "../services/FirebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"
import api from "../services/api"
import Cadastror from "../components/Modal/Cadastror"

function handleLogout(){
    signOut(auth)
    .then(()=> {
        console.log("usuario deslogado")
    })
    .catch((error)=> {
        console.error("erro ao deslogar",error)
    })
}

function Cadastrador() {
    const [activeModal, setActiveModal] = useState(null);
    const [user, setUser] = useState(null);
    const [families,setFamilies] = useState([])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Se o usuário existir, define ele; senão, fica null
        });

        return () => unsubscribe();
    }, [])

    async function fetchFamilies() {
        try {
            const response = await api.get("/cadastrador");
            console.log("Famílias recebidas:", response.data);
            setFamilies(response.data);
        } catch (error) {
            console.log("Erro ao buscar famílias", error);
        }
    }

    async function deleteFamily(id) {
        try {
            await api.delete(`/cadastrador/${id}`);
            fetchFamilies();
        } catch (error) {
            console.error("Erro ao deletar família:", error);
        }
    }

    return (
        <div>
            <h1>Cadastrador</h1>
            {user ? (
                <div>
                    <p>Bem-vindo, {user.email}!</p>
                    <button onClick={handleLogout}>Sair</button>

                    <h2>Adicionar Família</h2>
                    <button onClick={() => setActiveModal(true)}>Cadastrar família</button>

                    {activeModal && <Cadastror closeModal={() => setActiveModal(false)} fetchFamilies={fetchFamilies} />}

                    <h2>Lista de Famílias</h2>
                    <ul>
                        {families.map((family) => (
                            <li key={family.id}>
                                <p>{family.parents_name} - {family.address}</p>
                                <p>{family.children_name} ({family.children_age} anos)</p>
                                <button onClick={() => deleteFamily(family.id)}>Deletar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    );
}

export default Cadastrador;