
import styles from "./Card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"

// import { Link } from "react-router-dom";
function Card({  vista, titulo, color, onEditar }) {

    // const { favorito, agregarFavorito } = useFavoritosContext()
    // const isFavorito = favorito.some(fav=> fav.id === id)
    // const icon = isFavorito ? iconFavorito : iconNoFavorito

    return (
        <>
            <div className={styles.container} style={{ border: `5px solid ${color}` }}>
                {/* <Link className={styles.link} to={`/${id}`}> */}
                <img src={vista} alt={titulo} className={styles.vista}  />
                {/* <h2>{titulo}</h2> */}
                {/* </Link> */}
                <div className={styles.iconos}>
                    <div className={styles.borrar} >
                        <img
                            src={borrar}
                            alt="Icono de borrar"
                            className={styles.iconoBorrar}
                        // onClick={()=> agregarFavorito({id, titulo, vista})}
                        />
                        <h2>Borrar</h2>
                    </div>
                    <div className={styles.editar}  onClick={onEditar}>
                        <img
                            src={editar}
                            alt="Icono de editar"
                            className={styles.iconoEditar}
                        // onClick={()=> agregarFavorito({id, titulo, vista})}
                        />
                        <h2>Editar</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card

