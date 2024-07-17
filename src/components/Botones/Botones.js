import styles from "./Botones.module.css"

function Botones({ onCrear, onLimpiar }) {
    return (
        <div className={styles.contenedorBotones}>
            <button className={styles.botonCrear} onClick={onCrear}>Crear</button>
            <button className={styles.botonLimpiar} onClick={onLimpiar}>Limpiar</button>
        </div>
    );
}
export default Botones;
