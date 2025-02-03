import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'
function LinkButton({to,text,onclick,className}){
    return(
        <Link to={to} className = {`${styles.btn} ${className}`} onClick={onclick}>
            {text}
        </Link>
    )
}

export default LinkButton