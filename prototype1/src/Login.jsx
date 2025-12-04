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
        <div className="card m-auto p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-fit max-w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[rgba(10, 21, 26, 0.7)]">
            <div className="login-form mx-8">
                <p className="text-3xl font-bold mb-10">Login</p>
                <form className="mb-5 flex flex-col gap-4 items-center" action="/login" method="POST">
                    <div className="relative placeholder-black">
                        <input className="p-4 text-black border-2 border-black border-solid rounded-2xl w-108 bg-[#64646433]" type="email" name="email" id="email" placeholder="Email*" required />
                    </div>
                    <div className="relative placeholder-black">
                        <input className="p-4 text-black border-2 border-black border-solid rounded-2xl w-108 bg-[#64646433]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Wachtwoord*" required />
                        <div className="absolute right-4 top-4 cursor-pointer" onClick={togglePasswordVisibility} aria-label="toggle password visibility">
                            {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                        </div>
                    </div>
                    <button className="bg-[#2be295] w-52 p-2 rounded-4xl mt-6 min-w-fit text-black shadow-[0px_-3px_#0f202733_inset] cursor-pointer text-lg font-bold" type="submit">Inloggen</button>
                </form>
                <p>
                    <Link className="text-black no-underline" to="/forgot-password">Wachtwoord vergeten?</Link>
                </p>
                <p>
                    <Link className="text-black no-underline" to="/registerpage">Nog geen account? Registreer hier!</Link>
                </p>
                <p>
                    <Link className="text-black no-underline" to="/">Naar start pagina</Link>
                </p>
            </div>
        </div>
    )
}
export default Login
