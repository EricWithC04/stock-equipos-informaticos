import styles from './LoginForm.module.css'

const LoginForm = () => {
    return (
        <form className={styles["login-form"]}>
            <h2>Iniciar Sesión</h2>
            <p>Ingresa tus credenciales para acceder al sistema</p>
                
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder='ejemplo@email.com'/>
                
            <label htmlFor="password" >Contraseña</label>
            <input type="text" name="password" placeholder='Ingresa tu contraseña'/>

            <input type="submit" value="Registrarse" className={styles["login-button"]} />
            <p className={styles["login-text"]}>¿No tienes una cuenta? <a href="/register">Registrate</a></p>
        </form>
    )
}

export default LoginForm