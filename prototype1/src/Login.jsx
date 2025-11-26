import { Link } from "react-router-dom"
import "./App.css"

function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
                <input type="email" name="email" id="email" placeholder="Email*" required />

                <input type="password" name="password" id="password" placeholder="Password*" required />

                <input type="submit" value="Login" />
            </form>
            <p>
                <Link to="/register">Don't have an account? Register here!</Link>
            </p>
        </div>
    )
}
export default Login
