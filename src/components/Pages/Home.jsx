import styles from './Home.module.css'
import coracao from '../assets/coracao.png'
import { useState } from 'react'
import Modal from '../Layout/Modal'
import Register from '../Layout/Register/Register'
import Login from '../Login/Login'

function Home(){
    const [activeModal,setActiveModal] = useState(null)

    return (
        <section className={styles.home_container}>
            <h1>bem-vindo ao <span>CadAuxilio</span></h1>
            <img src={coracao} alt="CadAuxilio" style={styles.img} />

            <div className={styles.button_container}>
                <button onClick={() => setActiveModal("Register")}> Cadastrar-se</button>
                <button onClick={() => setActiveModal("Login")}> Login</button>
            </div>

            {activeModal === "register" && <Register closeModal={() => setActiveModal(null)}/>}
            {activeModal === "Login" && <Login closeModal={() => setActiveModal(null)}/>}
                {activeModal && <Modal closeModal={setActiveModal}/>}
            <h2>Sobre</h2>
            <p>Somos a Igreja Evangélica Rio da Vida, estamos atuando no centro de Maracanaú a sete anos e desde então levamos o evangelho de Cristo para todos, promovendo ações evangelísticas junto de ajuda para os mais carentes da comunidade local.</p>
            <p>Em nossa, localizada na avenida Padre José Holanda do Vale em Maracanaú, existe um projeto social que procura auxiliar as crianças carentes das comunidades mais próximas. Visando isso o CadAuxilios foi criado para suprir esse problema, utilizando ferramentas de frequência para as famílias das crianças receberem as cestas basicas ofertadas pela igreja.</p>
        </section>
    )
}

export default Home