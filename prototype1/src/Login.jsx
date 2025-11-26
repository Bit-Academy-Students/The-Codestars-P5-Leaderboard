import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
                <label htmlFor="email">email:</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">password:</label>
                <input type="password" name="password" id="password" />

                <input type="submit" value="Login" />
            </form>
            <p>
                <Link to="/register">Don't have an account? Register here!</Link>
            </p>
        </div>
    )
}
export default Login
