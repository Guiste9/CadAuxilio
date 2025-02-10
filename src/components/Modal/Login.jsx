import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/FirebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import styles from "./Modal.module.css";

function Login({ switchToRegister, closeModal}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    async function handleSignIn() {
        const response = await signInWithEmailAndPassword(email, password);
        if (response?.user) {
            closeModal();
             navigate("/cadastrador")
        }
    }
    

    return (
      <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
                              <button onClick={() => closeModal()}>×</button>
       </div>
        <div className={styles.centralized}>

            <h2>Login</h2>

            <div>
            <label >E-mail</label>
            <input 
            type="text"  
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            </div>

            <div>
                <label >Senha</label>
            <input type="password"
              value={password}
             onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className={styles.confirm} onClick={handleSignIn}>Entrar</button>

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Credenciais incorretas</p>}

            <p>Não tem uma conta? <button className={styles.hidden} onClick={switchToRegister}>Registrar-se</button></p>
        </div>
        </div>
        </div>
    );
}

export default Login;
