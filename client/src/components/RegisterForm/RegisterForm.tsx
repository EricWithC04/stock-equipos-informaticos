import styles from './RegisterForm.module.css'

const RegisterForm = () => {
    return (
        <form className={styles["register-form"]}>
            <h2>Registrarse</h2>
            <p>Crea una nueva cuenta para acceder al sistema</p>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name" placeholder='Ingresa tu nombre'/>
                
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder='ejemplo@email.com'/>
                
            <label htmlFor="password" >Contraseña</label>
            <input type="text" name="password" placeholder='Ingresa tu contraseña'/>
                
            <label htmlFor="confirm-password" >Confirmar Contraseña</label>
            <input type="text" name="confirm-password" placeholder='Confirma tu contraseña'/>

            <input type="submit" value="Registrarse" className={styles["register-button"]} />
            <p className={styles["register-text"]}>¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>
        </form>
    )
}

export default RegisterForm