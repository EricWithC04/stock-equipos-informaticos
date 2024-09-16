import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import { LoginValidateErrors } from './interface/login-validate-errors.interface'
import { emailRegex } from '../../utils/emailRegex'

const LoginForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<LoginValidateErrors>({})
    const [errorsActive, setErrorsActive] = useState<boolean>(false)

    const validate = () => {
        let currentErrors: LoginValidateErrors = {}
        if (!formData.email.length) currentErrors.email = 'El email es requerido'
        if (!emailRegex.test(formData.email)) currentErrors.email = 'Debes introducir un email válido'
        if (!formData.password.length) currentErrors.password = 'La contraseña es requerida'
        setErrors(currentErrors)
        return Object.keys(currentErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const valid = validate()

        if (valid) {
            fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token)
                    navigate('/')
                })
                .catch(err => console.log(err))
        }

        setErrorsActive(true)
    }

    return (
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <p>Ingresa tus credenciales para acceder al sistema</p>
                
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder='ejemplo@email.com' onChange={handleChange} />
            { errorsActive && errors.hasOwnProperty("email") ? 
                <p className={styles["login-error"]}>{errors.email}</p> : null }
                
            <label htmlFor="password" >Contraseña</label>
            <input type="text" name="password" placeholder='Ingresa tu contraseña' onChange={handleChange} />
            { errorsActive && errors.hasOwnProperty("password") ? 
                <p className={styles["login-error"]}>{errors.password}</p> : null }

            <input type="submit" value="Iniciar Sesión" className={styles["login-button"]} />
            <p className={styles["login-text"]}>¿No tienes una cuenta? <a href="/register">Registrate</a></p>
        </form>
    )
}

export default LoginForm