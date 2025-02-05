import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../assets/pessoas.png'

function Navbar(){

    return (
      <nav className = {styles.navbar}>
        <Container>
            <Link to= "/"> 
            <img src={logo} alt="CadAuxilio" style={{width: '100px', height: '100px'}} />
            </Link>
        <ul className = {styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Cadastrador">Cadastrador</Link>
            </li>
            <li className={styles.item}>
                <Link to="/Frequências">Frequências</Link>
            </li>
        </ul>
        </Container>
      </nav>
    )

}

export default Navbar