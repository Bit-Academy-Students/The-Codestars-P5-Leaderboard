import { Link } from "react-router-dom"
import "./App.css"
import ThemeToggle from './ThemeToggle';

function ForgotPassword() {
    return (
        <>
            <div className="card m-auto p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-fit max-w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[#0a151ab3]">
                <div className="reset-password-form mx-8">
                    <p className="text-3xl font-bold mb-5 dark:text-white">Wachtwoord vergeten?</p>
                    
                    <form className="mb-5 flex flex-col gap-4 items-center" action="/login" method="POST">
                        <div className="relative placeholder-black">
                            <input className="p-4 text-black font-bold border-3 border-gray-500 border-solid rounded-2xl w-108 bg-[#ffffff1a] dark:text-white dark:border-[#ffffff1a] focus:border-[#2be295] focus:outline-none user-invalid:border-[#ffad00]" type="email" name="email" id="email" placeholder="E-mail*" required />
                        </div>
                        <button className="bg-[#2be295] w-52 p-2 rounded-4xl mt-6 min-w-fit text-black shadow-[0px_-3px_#0f202733_inset] cursor-pointer text-lg font-bold hover:bg-[#27c17a] active:shadow-none" type="submit">Vraag nieuw wachtwoord aan</button>
                    </form>
                    <Link className="text-black dark:text-white no-underline" to="/Login-Prototype">Ga terug naar de login pagina</Link>
                </div>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    )
}

export default ForgotPassword