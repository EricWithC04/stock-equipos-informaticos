import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles["login-container"]}>
            <LoginForm />
        </div>
    )
}

export default Login