import { useState } from "react";
import React from "react";
import { auth } from "../../services/FireBaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import styles from "../Layout/Modal.module.css";

function Login({ switchToRegister, closeModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    async function handleSignIn() {
        const response = await signInWithEmailAndPassword(email, password);
        if (response?.user) {
            closeModal(); 
        }
    }

    return (
      <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
                              <button onClick={() => closeModal()}>×</button>
                            </div>
        <div className={styles.centralized}>
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Entrar</button>

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error.message}</p>}

            <p>Não tem uma conta? <button onClick={switchToRegister} className={styles.linkButton}>Registrar-se</button></p>
        </div>
        </div>
        </div>
    );
}

export default Login;
