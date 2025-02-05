import { useEffect,useState } from "react"
import { auth } from "../../services/FirebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { signOut } from "firebase/auth"

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Se o usuário existir, define ele; senão, fica null
        });

        return () => unsubscribe();
    }, [])
    return (
        <div>
        <h1>Frequências</h1>
            {user ? (
                <div>
                <p>Bem-vindo, {user.email}!</p>
                <button onClick={handleLogout}>Sair</button>
                </div>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    )
}

export default Frequências