import styles from "./Container.module.css"

function Container({children}){
    return(
    <section className={styles.container}>
    {/* <h2></h2> */}
    {children}
    </section>
    )
    }
    export default Container