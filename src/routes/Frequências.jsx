import { useEffect,useState } from "react"
import { auth } from "../services/FirebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"
import api from "../services/api"
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
                fetchFamilies()
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

    useEffect(() => {
        fetchFamilies()
    }, [])
    
    return (

        <div> 
                    <div className={styles.header}>
                    <h1 >Frequências</h1>
                    {user ? <p>Bem-vindo, {user.email}!</p> : <p>Você não está logado.</p>}
                    </div>
            {user ? (<div>
                    <button onClick={handleLogout} className={styles.logout}>Sair</button>

                    <h2>Lista de Famílias</h2>
                    <div className={styles.rectangule}>
            {families.map((family) => (
            <div className={styles.family_card} key={family.id || Math.random().toString(36).substr(2, 9)}> 
            <p>Nome: {family.parents_name}</p>
            <p>Endereço: {family.address}</p>
            <p>Criança: {family.children_name} ({family.children_age} anos)</p>
            
            {/* Exibir quantidade de presenças */}
            <p>Presenças: {family.attendance ? family.attendance.length : 0}</p>

            <div>
                {family.attendance && family.attendance.map((date,index) => (
                    <div key={index}>{new Date(date).toLocaleDateString("pt-BR")}</div>
                ))}
            </div>

            {/* Botão para marcar presença */}
            <button className={styles.attendancebtn} onClick={() => markAttendance(family.id)}>Marcar Presença</button>
        </div>
    ))}
</div>
                        
                </div>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    )
}

export default Frequências