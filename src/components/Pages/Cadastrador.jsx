import { useEffect,useState } from "react"
import { auth } from "../../services/FirebaseConfig"
import { onAuthStateChanged } from "firebase/auth"

function Cadastrador(){
    const [user,setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user)
            } else {
                setUser(null)
            }
        })

        return () => unsubscribe()
    })
    return (
        
    <div>
        <h1>Cadastrador</h1>
            {user ? (
                <p>Bem-vindo, {user.email}!</p>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
        
    )
}

export default Cadastrador