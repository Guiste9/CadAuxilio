import { FaUser, FaLock } from "react-icons/fa"

import { useState } from "react"
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import "./Login.module.css"
import { auth } from "../../services/FireBaseConfig"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignIn(){
    createUserWithEmailAndPassword(email,password)
  }

  const handlesubmit = (event) => {
    event.preventDefault()

    alert("enviando os dados:" + username + "-" + password)
  }
  return (
    <div className="container">
        <form onSubmit={handlesubmit}>
            <h1>acesse o sistema</h1>
            <div className=" input-field">
                <input 
                type="text"
                placeholder='E-mail'
                required onChange={e => setEmail(e.target.value)} />
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder='Senha' onChange={e => P(e.target.value)}/>
                <FaLock className="icon"/>
            </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
            <button onClick={handleSignIn}>Entrar</button>

          <div className="signup-link">
            <p>
              Não tem um conta? <a href="#">Registar</a>
            </p>
          </div>
        </form>
    </div>
  )
}

export default Login
