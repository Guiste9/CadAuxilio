import { useEffect,useState } from "react"
import { auth } from "../services/FirebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"
import api from "../services/api"
import Cadastror from "../components/Modal/Cadastror"
import styles from "./Cadastrador.module.css"

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

    useEffect(() => {
        fetchFamilies()
    }, [])

    return (
        <div> 
            <div className={styles.header}>
            <h1 >Cadastrador</h1>
            {user ? <p>Bem-vindo, {user.email}!</p> : <p>Você não está logado.</p>}
            </div>
            {user ? (
                <div>
                    <button onClick={handleLogout} className={styles.logout}>Sair</button>

                    <h2>Adicionar Família</h2>
                    <button className={styles.btn} onClick={() => setActiveModal(true)}>Cadastrar família</button>

                    {activeModal && <Cadastror closeModal={() => setActiveModal(false)} fetchFamilies={fetchFamilies} familyData={activeModal} />}

                    <h2>Lista de Famílias</h2>
                    <div className={styles.rectangule}>
                        {families.map((family) => (
                            <div key={family.id} className={styles.family_card}>
                                <p>Nome: {family.parents_name} </p>
                                <p>Endereço: {family.address}</p>
                                <p>Contato: {family.number}</p>
                                <p>Criança: {family.children_name} ({family.children_age} anos)</p>
                                <button onClick={() => deleteFamily(family.id)} className={styles.delete}>Deletar</button>
                                <button className={styles.edit} onClick={() => setActiveModal(family)}>Editar</button>
                            </div>
                        ))}
                    
                    </div>
                </div>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    );
}

export default Cadastrador;