import { useState } from "react"
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import styles from "../Layout/Modal.module.css";
import { auth } from "../../services/FirebaseConfig"

function Register({ switchToLogin, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleRegister() {
        const response = await createUserWithEmailAndPassword(email, password);
    }
    
    function bothClicks(){
        handleRegister()
        switchToLogin()
    }

  return (
    <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.titleCloseBtn}>
                      <button onClick={() => closeModal()}>×</button>
                    </div>

     
    <div className={styles.centralized}>
       <h2>Registro</h2>
      
        <div >
          <label >E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            
          />
        </div>

        <div >
          <label >Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>

        <button className={styles.confirm} onClick={bothClicks}  >
          Cadastrar 
        </button>
        
          <p>Você já tem uma conta?
          <button className={styles.hidden} onClick={switchToLogin}>Acesse sua conta aqui</button>

        </p>
    </div>
    </div>
    </div>
  );
}

export default Register
