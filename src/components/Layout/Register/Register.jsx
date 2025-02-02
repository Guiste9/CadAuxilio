import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useState } from "react"
import style from "./Register.module.css"

function Register(){
    
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
    
    return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Register