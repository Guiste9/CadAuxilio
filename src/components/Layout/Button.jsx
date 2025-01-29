import styles from './Button.module.css'

function Button({to,text,onclick,className}){
    return(
        <button className = {`${styles.btn} ${className}`} onClick={onclick}>
            {text}
        </button>
    )
}

export default Button