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
                            className={styles.elementoFormulario}
                            titulo="Título"
                            placeholder="ingrese el título"
                            required
                            valor={titulo}
                            actualizarValor={actualizarTitulo}
                        />
                        <ListaOpciones
                            className={styles.elementoFormulario}
                            required
                            valor={categoria}
                            actualizarValor={actualizarCategoria}
                            opcionesDeCategoria={opcionesDeCategoria}
                        />

                        <CampoTexto
                            className={styles.elementoFormulario}
                            titulo="Imagen"
                            placeholder="el enlace es obligatorio"
                            required
                            valor={imagen}
                            actualizarValor={actualizarImagen}
                        />

                        <CampoTexto
                            className={styles.elementoFormulario}
                            titulo="Video"
                            placeholder="ingrese el enlace del video"
                            required
                            valor={video}
                            actualizarValor={actualizarVideo}
                        />

                        <div className={styles.fondoFormulario}>
                            <CajaDescriptiva
                                className={styles.elementoFormulario}
                                titulo="Descripción"
                                placeholder="¿De qué se trata este vídeo?"
                                required
                                valor={descripcion}
                                actualizarValor={actualizarDescripcion}
                            />
                            <Botones />
                        </div>
                    </form>


                </section>
            </section>
        </>
    )
}
export default Formulario