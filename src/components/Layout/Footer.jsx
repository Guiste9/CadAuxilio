import styles from './Footer.module.css'
function Footer(){

    return (
        <footer class ={styles.footer}>
            <ul class ={styles.social_list}>
                <li>
                   Contato:
                    (85) 98900-6765
                </li>
                <li>
                     localização:
                     Av. Padre José Holanda do Vale, 38
                </li>
            </ul>
        </footer>
    )
}

export default Footer