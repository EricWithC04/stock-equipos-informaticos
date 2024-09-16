import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './RegisterForm.module.css'
import { UserValidateErrors } from './interface/user-validate-errors.interface'
import { emailRegex } from '../../utils/emailRegex'

const RegisterForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState<UserValidateErrors>({})
    const [errorsActive, setErrorsActive] = useState<boolean>(false)

    const validate = (): boolean => {
        let currentErrors: UserValidateErrors = {}
        if (!formData.name.length) currentErrors.name = 'El nombre es requerido'
        if (formData.name.length < 3) currentErrors.name = 'El nombre debe tener al menos 3 caracteres'
        if (!formData.email.length) currentErrors.email = 'El email es requerido'
        if (!emailRegex.test(formData.email)) currentErrors.email = 'Debes introducir un email válido'
        if (!formData.password.length) currentErrors.password = 'La contraseña es requerida'
        if (formData.password.length < 6) currentErrors.password = 'La contraseña debe tener al menos 6 caracteres'
        if (formData.password === formData.password.toLowerCase()) currentErrors.password = 'La contraseña debe tener al menos una mayúscula'
        if (formData.password === formData.password.toUpperCase()) currentErrors.password = 'La contraseña debe tener al menos una mínúscula'
        if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = 'Las contraseñas no coinciden'
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
        setErrorsActive(true)

        const valid = validate()

        if (valid) {
            fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(_data => {
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })
                    navigate('/login')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <form className={styles["register-form"]} onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <p>Crea una nueva cuenta para acceder al sistema</p>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name" placeholder='Ingresa tu nombre' onChange={handleChange} />
            { errorsActive && errors.hasOwnProperty("name") ? 
                <p className={styles["register-error"]}>{errors.name}</p> : null }
                
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder='ejemplo@email.com' onChange={handleChange} />
            { errorsActive && errors.hasOwnProperty("email") ? 
                <p className={styles["register-error"]}>{errors.email}</p> : null }
                
            <label htmlFor="password" >Contraseña</label>
            <input type="text" name="password" placeholder='Ingresa tu contraseña' onChange={handleChange}/>
            { errorsActive && errors.hasOwnProperty("password") ? 
                <p className={styles["register-error"]}>{errors.password}</p> : null }
                
            <label htmlFor="confirmPassword" >Confirmar Contraseña</label>
            <input type="text" name="confirmPassword" placeholder='Confirma tu contraseña' onChange={handleChange}/>
            { errorsActive && errors.hasOwnProperty("confirmPassword") ? 
                <p className={styles["register-error"]}>{errors.confirmPassword}</p> : null }

            <input type="submit" value="Registrarse" className={styles["register-button"]} />
            <p className={styles["register-text"]}>¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>
        </form>
    )
}

export default RegisterForm