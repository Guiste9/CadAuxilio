import { useEffect,useState } from "react"
import { auth } from "../services/FirebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"
import api from "../services/api"

function handleLogout(){
    signOut(auth)
    .then(()=> {
        console.log("usuario deslogado")
    })
    .catch((error)=> {
        console.error("erro ao deslogar",error)
    })
}

function Frequências() {
    const [user, setUser] = useState(null);
    const [families,setFamilies] = useState([])


    async function fetchFamilies() {
        try {
            const response = await api.get("/cadastrador");
            console.log("Famílias recebidas:", response.data);
            setFamilies(response.data);
        } catch (error) {
            console.log("Erro ao buscar famílias", error);
        }
    }

    const markAttendance = async (id) => {
        try {
            const response = await fetch ("http://localhost:3000/frequencias", {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({id})
            })

            const data = await response.json()

            if (data.success){
                alert("frequencia marcada com sucesso")
            } else {
                alert("erro ao marcar frequencia"+ data.error)
            }
        } catch (error){
            console.error("erro ao marcar frequencia")
        }
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Se o usuário existir, define ele; senão, fica null
        });

        return () => unsubscribe();
    }, [])

    
    return (
        <div>
        <h1>Frequências</h1>
            {user ? (<div>
                    <p>Bem-vindo, {user.email}!</p>
                    <button onClick={handleLogout}>Sair</button>
                    <form >
                        
                    </form>

                    <h2>Lista de Famílias</h2>

                    <ul>
    {families.map((family) => (
        <li key={family.id || Math.random().toString(36).substr(2, 9)}> 
            <p>{family.parents_name} - {family.address}</p>
            <p>{family.children_name} ({family.children_age} anos)</p>
            
            {/* Exibir quantidade de presenças */}
            <p>Presenças: {family.attendance ? family.attendance.length : 0}</p>

            {/* Botão para marcar presença */}
            <button onClick={() => markAttendance(family.id)}>Marcar Presença</button>

            {/* Botão para deletar */}
            <button onClick={() => deleteFamily(family.id)}>Deletar</button>
        </li>
    ))}
</ul>
                        
                </div>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    )
}

export default Frequências