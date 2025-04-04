import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera() {
    return (
        <header className={styles.cabecera}>

            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />
                    <span></span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                HOME
                </CabeceraLink>
                <CabeceraLink url="./nuevo">
                NUEVO VIDEO
                </CabeceraLink>
            </nav>
        </header>)

}
export default Cabecera