import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../assets/pessoas.png'

function Navbar(){

    return (
      <nav class = {styles.navbar}>
        <Container>
            <Link to= "/"> 
            <img src={logo} alt="CadAuxilio" style={{width: '100px', height: '100px'}} />
            </Link>
        <ul class = {styles.list}>
            <li class={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li class={styles.item}>
                <Link to="/Cadastrador">Cadastrador</Link>
            </li>
            <li class={styles.item}>
                <Link to="/Frequências">Frequências</Link>
            </li>
        </ul>
        </Container>
      </nav>
    )

}

export default Navbar