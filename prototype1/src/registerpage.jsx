import { Link } from "react-router-dom"
import { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ThemeToggle from './ThemeToggle';

function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((v) => !v);
    }
    return (
        <>
            <div className="card m-auto p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-fit max-w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[#0a151ab3]">
                <div className="login-form mx-8">
                    <p className="text-3xl font-bold mb-10 dark:text-white">Register</p>

                    <form className="mb-5 flex flex-col gap-4 items-center" action="/register" method="POST">
                        <div className="relative placeholder-black">
                            <input className="p-4 text-black border-2 border-gray-500 dark:border-[#ffffff1a] dark:text-white border-solid rounded-2xl w-108 bg-[#ffffff1a]" type="text" name="username" id="username" placeholder="Username*" required />
                        </div>

                        <div className="relative placeholder-black">
                            <input className="p-4 text-black border-2 border-gray-500 dark:border-[#ffffff1a] dark:text-white border-solid rounded-2xl w-108 bg-[#ffffff1a]" type="email" name="email" id="email" placeholder="Email*" required />
                        </div>

                        <div className="relative placeholder-black">
                            <input className="p-4 text-black border-2 border-gray-500 dark:border-[#ffffff1a] dark:text-white border-solid rounded-2xl w-108 bg-[#ffffff1a]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Wachtwoord*" required />
                            <div className="absolute right-4 top-4 cursor-pointer dark:text-white" onClick={togglePasswordVisibility} aria-label="toggle password visibility">
                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                            </div>
                        </div>

                        <button className="bg-[#2be295] w-52 p-2 rounded-4xl mt-6 min-w-fit text-black shadow-[0px_-3px_#0f202733_inset] cursor-pointer text-lg font-bold" type="submit">Register</button>
                    </form>
                    <Link className="text-black dark:text-white no-underline" to="/login-prototype">login page prototype</Link>
                </div>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}

export default RegisterPage;
