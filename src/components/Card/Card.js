
import styles from "./Card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"

// import { Link } from "react-router-dom";
function Card({  vista, titulo, color, onEditar }) {

   

    return (
        <>
            <div className={styles.container} style={{ border: `5px solid ${color}` }}>
                <img src={vista} alt={titulo} className={styles.vista}  />
               
                <div className={styles.iconos}>
                    <div className={styles.borrar} >
                        <img
                            src={borrar}
                            alt="Icono de borrar"
                            className={styles.iconoBorrar}
                        />
                        <h2>Borrar</h2>
                    </div>
                    <div className={styles.editar}  onClick={onEditar}>
                        <img
                            src={editar}
                            alt="Icono de editar"
                            className={styles.iconoEditar}
                        />
                        <h2>Editar</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card

