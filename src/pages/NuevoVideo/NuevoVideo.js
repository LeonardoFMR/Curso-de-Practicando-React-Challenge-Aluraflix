import { useContext } from "react";
import { VideoContext } from "contexts/VideoContext";
import styles from "./NuevoVideo.module.css";
import Formulario from "components/Formulario/Formulario";

function NuevoVideo() {
    const { registrarNuevo } = useContext(VideoContext);

    const opcionesDeCategoria = [
        "FRONT END",
        "BACK END",
        "INNOVACIÓN Y GESTIÓN",
        "OTRA OPCIÓN",
        "NUEVA CATEGORÍA"
    ];

    return (
        <div className={styles.fondo}>
            <Formulario opcionesDeCategoria={opcionesDeCategoria} registrarNuevo={registrarNuevo} />
        </div>
    );
}

export default NuevoVideo;
