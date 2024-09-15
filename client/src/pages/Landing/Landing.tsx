import React from 'react'
import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={styles["container"]}>
            <h1>Stock Equipos Informaticos</h1>
            <p>Simplifica la gestión de tus equipos informáticos con nuestra plataforma intuitiva y eficiente.</p>
            <div className={styles["buttons-container"]}>
                <button className={styles["login"]}>
                    Iniciar Sesión
                </button>
                <button className={styles["register"]}>
                    Registrarse
                </button>
            </div>
        </div>
    )
}

export default Landing