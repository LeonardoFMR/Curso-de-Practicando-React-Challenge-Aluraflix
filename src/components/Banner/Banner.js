import styles from "./Banner.module.css";

function Banner({ img, color }) {
    return (
        <div>
            <div className={styles.vista} style={{ backgroundImage: `url("/img/banner-${img}.png")` }}></div>
            <div className={styles.gradiente} style={{ background: `${color}` }}></div>
        </div>
    );
}

export default Banner;
