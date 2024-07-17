import styles from "./ListaOpciones.module.css";

function ListaOpciones({ valor, actualizarValor, opcionesDeCategoria, required }) {
    const manejarCambio = (e) => {
        actualizarValor(e.target.value);
    };

    return (
        <div className={styles.opciones}>
            <label>Categoría</label>
            <select
                required={required}
                value={valor}
                onChange={manejarCambio}
            >
                <option value="" disabled>Selecciona una categoría</option>
                {opcionesDeCategoria.map((item, index) => (
                    <option 
                        key={index} 
                        value={item.categoria || item}
                    >
                        {item.categoria || item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaOpciones;
