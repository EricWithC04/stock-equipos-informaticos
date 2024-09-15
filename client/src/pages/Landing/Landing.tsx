import { useNavigate } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = () => {

    const navigate = useNavigate()

    return (
        <div className={styles["container"]}>
            <h1>Stock Equipos Informaticos</h1>
            <p>Simplifica la gestión de tus equipos informáticos con nuestra plataforma intuitiva y eficiente.</p>
            <div className={styles["buttons-container"]}>
                <button className={styles["login"]} onClick={() => navigate('/login')}>
                    Iniciar Sesión
                </button>
                <button className={styles["register"]} onClick={() => navigate('/register')}>
                    Registrarse
                </button>
            </div>
        </div>
    )
}

export default Landing