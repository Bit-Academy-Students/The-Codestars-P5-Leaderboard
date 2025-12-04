import { Link } from "react-router-dom"
import { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import "./App.css"

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((v) => !v);
    }
    return (
        <div className="card">
            <div className="login-form">
                <p className="text-3xl font-bold mb-5">Login</p>
                <form className="mb-5" action="/login" method="POST">
                    <div className="relative">
                        <input type="email" name="email" id="email" placeholder="Email*" required />
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Wachtwoord*" required />
                        <div className="absolute right-4 top-4 cursor-pointer" onClick={togglePasswordVisibility} aria-label="toggle password visibility">
                            {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                        </div>
                    </div>
                    <input className="btn" type="submit" value="Inloggen" />
                </form>
                <p>
                    <Link className="link" to="/forgot-password">Wachtwoord vergeten?</Link>
                </p>
                <p>
                    <Link className="link" to="/registerpage">Nog geen account? Registreer hier!</Link>
                </p>
                <p>
                    <Link className="link" to="/">Naar start pagina</Link>
                </p>
            </div>
        </div>
    )
}
export default Login
