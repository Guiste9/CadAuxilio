import styles from './Home.module.css'
import coracao from '../assets/coracao.png'
import Popup from '../Layout/PopUp'
import { useState } from 'react'
import Button from '../Layout/Button'
import Login from '../Login/Login'
import Cadastrador from '../Login/Cadastrador'
import Modal from '../Layout/Modal'

function Home(){
    const [openModal,setOpenModal] = useState(false)
    return (
        <section className={styles.home_container}>
            <h1>bem-vindo ao <span>CadAuxilio</span></h1>
            <img src={coracao} alt="CadAuxilio" style={styles.img} />
            <div className={styles.button_container}>
                {/*<Button text = "Cadastrar-se"  to={<Cadastrador/>} onClick={() => setOpenModal(!openModal)}/>
                <Button text = "Login"  to={<Login/>} onClick={() => setOpenModal(!openModal)}/>*/}
                <button className='openmodalbtn' onClick={() => {setOpenModal(true)}}>open</button>
                {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            
            <h2>Sobre</h2>
            <p>Somos a Igreja Evangélica Rio da Vida, estamos atuando no centro de Maracanaú a sete anos e desde então levamos o evangelho de Cristo para todos, promovendo ações evangelísticas junto de ajuda para os mais carentes da comunidade local.</p>
            <p>Em nossa, localizada na avenida Padre José Holanda do Vale em Maracanaú, existe um projeto social que procura auxiliar as crianças carentes das comunidades mais próximas. Visando isso o CadAuxilios foi criado para suprir esse problema, utilizando ferramentas de frequência para as famílias das crianças receberem as cestas basicas ofertadas pela igreja.</p>
        </section>
    )
}

export default Home