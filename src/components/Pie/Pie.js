import { Link } from "react-router-dom"
import styles from "./Pie.module.css"
import logo from "./logo.png"

function Pie() {
    return (
        <footer className={styles.footer}>

            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />
                    <span></span>
                </section>
            </Link>
            <nav>
                <h2>
                Desarrollado por Leonardo Morales
                </h2>
    
            </nav>
        </footer>)

}
export default Pie