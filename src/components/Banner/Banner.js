import Titulo from "components/Titulo/Titulo";
import styles from "./Banner.module.css";
import { useEffect } from "react";

function Banner({ img, color }) {
    useEffect(() => {
        console.log("Banner props:", { img, color });
    }, [img, color]);

    const Front = "/img/titulo_categoria.png"
    const player = "/img/player.png"

    return (
        <div className={styles.banner}>

            <div className={styles.vista} style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>
                <div className={styles.contenedor}>
                    <img src={Front} alt="FontEnd" className={styles.titulo_categoria} />


                    <Titulo>
                        <div className={styles.texto_banner}>
                            <h1 className={styles.titulo}>Challenge React</h1>
                            <h2 className={styles.parrafo}>
                                Este challenge es una forma de aprendizaje. Es un mecanismo
                                donde podrás comprometerte en la resolución de un problema para
                                poder aplicar todos los conocimientos adquiridos en la
                                formación React.
                            </h2>

                        </div>

                    </Titulo>
                </div>
                <img src={player} alt="Player" className={styles.player} />
            </div>


            {/* <div className={styles.gradiente} style={{ background: `${color}` }}>
                
            </div> */}

        </div>
    );
}

export default Banner;


