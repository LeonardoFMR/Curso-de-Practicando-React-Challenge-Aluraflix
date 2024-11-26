import { useState } from "react"
import CampoTexto from "components/CampoTexto/CampoTexto"
import styles from "./Formulario.module.css"
import ListaOpciones from "components/ListaOpciones/ListaOpciones"
import CajaDescriptiva from "components/CajaDescriptiva/CajaDescriptiva"
import Botones from "components/Botones/Botones"

function Formulario({ opcionesDeCategoria, registrarNuevo }) {

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            descripcion: descripcion
        };
        registrarNuevo(datosAEnviar);
        actualizarTitulo("");
        actualizarCategoria("");
        actualizarImagen("");
        actualizarVideo("");
        actualizarDescripcion("");
    };

    return (
        <>
            <section className={styles.fondo}>
                <section className={styles.container}>


                    <h2>NUEVO VIDEO</h2>
                    <h4>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
                    <h3>Crear Tarjeta</h3>
                    <form className={styles.formulario} onSubmit={manejarEnvio}>
                        <CampoTexto
                            className={`${styles.elementoFormulario} ${styles.titulo}`}
                            titulo="Título"
                            placeholder="ingrese el título"
                            required
                            valor={titulo}
                            actualizarValor={actualizarTitulo}
                        />
                        <ListaOpciones
                            className={`${styles.elementoFormulario} ${styles.categoria}`}
                            required
                            valor={categoria}
                            actualizarValor={actualizarCategoria}
                            opcionesDeCategoria={opcionesDeCategoria}
                        />

                        <CampoTexto
                            className={`${styles.elementoFormulario} ${styles.imagen}`}
                            titulo="Imagen"
                            placeholder="el enlace es obligatorio"
                            required
                            valor={imagen}
                            actualizarValor={actualizarImagen}
                        />

                        <CampoTexto
                            className={`${styles.elementoFormulario} ${styles.video}`}
                            titulo="Video"
                            placeholder="ingrese el enlace del video"
                            required
                            valor={video}
                            actualizarValor={actualizarVideo}
                        />

                        <div className={`${styles.elementoFormulario} ${styles.descripcion}`}>
                            <CajaDescriptiva

                                titulo="Descripción"
                                placeholder="¿De qué se trata este vídeo?"
                                required
                                valor={descripcion}
                                actualizarValor={actualizarDescripcion}
                            />

                        </div>
                        <Botones className={`${styles.elementoFormulario} ${styles.botones}`} />
                    </form>


                </section>
            </section>
        </>
    )
}
export default Formulario