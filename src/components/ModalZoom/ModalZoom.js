
import CampoTexto from "components/CampoTexto/CampoTexto"
import styles from "./ModalZoom.module.css"
import Botones from "components/Botones/Botones"
import CajaDescriptiva from "components/CajaDescriptiva/CajaDescriptiva"
import ListaOpciones from "components/ListaOpciones/ListaOpciones"
import { useState } from "react"
import { useEffect, useRef } from "react";

function ModalZoom({ opcionesDeCategoria, visible, onClose, onCrear, registrarNuevo }) {

    const resetForm = () => {
        actualizarTitulo("");
        actualizarCategoria("");
        actualizarImagen("");
        actualizarVideo("");
        actualizarDescripcion("");
    };

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    
    const dialogRef = useRef(null);


    // Efecto para mostrar/ocultar el modal
    useEffect(() => {
        if (dialogRef.current) {
            if (visible) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [visible]);

    const manejarEnvio = (e) => {
    e.preventDefault()
    let datosAEnviar = {
        titulo: titulo,
        categoria: categoria,
        imagen: imagen,
        video: video,
        descripcion: descripcion
    }
    registrarNuevo(datosAEnviar); 
    onCrear(datosAEnviar); 
}




    return (
        <>
            <dialog ref={dialogRef} onClose={() => onClose()}>
                <section className={styles.fondo}>
                    <section className={styles.container}>

                        <button type="button" onClick={onClose}>Cerrar</button>

                        <h2>NUEVO VIDEO</h2>
                        <h4>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
                        <h3>Crear Tarjeta</h3>
                        <form className={styles.formulario} onSubmit={manejarEnvio}>

                            <CampoTexto
                                titulo="Título"
                                placeholder="ingrese el título"
                                required
                                valor={titulo}
                                actualizarValor={actualizarTitulo}
                            />
                            <ListaOpciones
                                required
                                valor={categoria}
                                actualizarValor={actualizarCategoria}
                                opcionesDeCategoria={opcionesDeCategoria}
                            />

                            <CampoTexto
                                titulo="Imagen"
                                placeholder="el enlace es obligatorio"
                                required
                                valor={imagen}
                                actualizarValor={actualizarImagen}
                            />

                            <CampoTexto
                                titulo="Video"
                                placeholder="ingrese el enlace del video"
                                required
                                valor={video}
                                actualizarValor={actualizarVideo}
                            />

                            <div className={styles.fondoFormulario}>
                                <CajaDescriptiva
                                    titulo="Descripción"
                                    placeholder="¿De qué se trata este vídeo?"
                                    required
                                    valor={descripcion}
                                    actualizarValor={actualizarDescripcion}
                                />
                                <Botones onCrear={manejarEnvio} onLimpiar={resetForm} />


                            </div>
                        </form>


                    </section>
                </section>
            </dialog>
        </>
    )
}
export default ModalZoom
