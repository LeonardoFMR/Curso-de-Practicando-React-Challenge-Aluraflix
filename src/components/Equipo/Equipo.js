// import Card from "components/Card/Card";
import styles from "./Equipo.module.css";
// import data from "data/db.json";
import Colaborador from "components/Colaborador/Colaborador";

import Colaborador2 from "components/Colaborador2/Colaborador";

function Equipo({ categoria, color, onEditar, onEliminar, videos }) {


    return (
        <section className={styles.categoria} >
            <h3 className={styles.titulo} style={{ backgroundColor: color }}>{categoria}</h3>
            <div className={styles.equipo}>
                <section className={styles.container}>
                    {/* {videos.map((video) => {
                        return <Card {...video} key={video.id} color={color}  />;
                    })} */}

                    <Colaborador
                        color={color}
                        onEditar={onEditar}
                        onEliminar={onEliminar}
                    />
                    <Colaborador2
                        color={color}
                        onEditar={onEditar}
                        onEliminar={onEliminar}
                    />



                    {
                        videos.map((video, index) => <Colaborador
                            color={color}
                            onEditar={onEditar}
                            onEliminar={() => onEliminar(video.titulo)}
                            datos={video}
                            key={index}
                        /> 

                        )
                    }



                </section>
            </div>
        </section>
    );
}
export default Equipo;
