import { Link } from "react-router-dom"
import "./App.css"

function Login() {
    return (
        <div className="card">
            <div className="login-form">
                <h2>Login</h2>
                <form action="/login" method="POST">
                    <input type="email" name="email" id="email" placeholder="Email*" required />

                    <input type="password" name="password" id="password" placeholder="Wachtwoord*" required />

                    <input className="btn" type="submit" value="Inloggen" />
                </form>
                <p>
                    <Link className="link" to="/forgot-password">Wachtwoord vergeten?</Link>
                </p>
                <p>
                    <Link className="link" to="/register">Geen account? Registreer hier!</Link>
                </p>
            </div>
        </div>
    )
}
export default Login
