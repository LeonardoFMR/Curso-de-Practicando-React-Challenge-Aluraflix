import Banner from "components/Banner/Banner";
import Titulo from "components/Titulo/Titulo";
import styled from "styled-components";
import Equipo from "components/Equipo/Equipo";
import ModalZoom from "components/ModalZoom/ModalZoom";
import { useContext, useState } from "react";
import { VideoContext } from "contexts/VideoContext";

const FondoGradiente = styled.div`
    background: #262626;
    width: 100%;
    min-height: 100vh;
`;

function Inicio() {
    const { videos, registrarNuevo, eliminarVideo } = useContext(VideoContext);
    const [mostrarModal, setMostrarModal] = useState(false);

    const opcionesDeCategoria = [
        {
            categoria: "FRONT END",
            color: "#FFBA05"
        },
        {
            categoria: "BACK END",
            color: "#6BD1FF"
        },
        {
            categoria: "INNOVACIÓN Y GESTIÓN",
            color: "#00C86F"
        },
        {
            categoria: "OTRA OPCIÓN",
            color: "#FF0000"
        },
        {
            categoria: "NUEVA CATEGORÍA",
            color: "#7FFFD4"
        }
    ];

    return (
        <FondoGradiente>
            <Banner img="home" color="#F5F5F5" />
            <Titulo>
                <h1>Challenge React</h1>
                <h2>
                    Este challenge es una forma de aprendizaje. Es un mecanismo
                    donde podrás comprometerte en la resolución de un problema para
                    poder aplicar todos los conocimientos adquiridos en la
                    formación React.
                </h2>
            </Titulo>

            {opcionesDeCategoria.map((cadaCategoria, index) => (
                <Equipo
                    key={index}
                    categoria={cadaCategoria.categoria}
                    color={cadaCategoria.color}
                    onEditar={() => setMostrarModal(true)}
                    onEliminar={eliminarVideo}
                    videos={videos.filter(video => video.categoria === cadaCategoria.categoria)}
                />
            ))}
            {mostrarModal && (
                <ModalZoom
                    opcionesDeCategoria={opcionesDeCategoria}
                    visible={mostrarModal}
                    onClose={() => setMostrarModal(false)}
                    registrarNuevo={registrarNuevo}
                    onCrear={() => setMostrarModal(false)}
                />
            )}
        </FondoGradiente>
    );
}

export default Inicio;
