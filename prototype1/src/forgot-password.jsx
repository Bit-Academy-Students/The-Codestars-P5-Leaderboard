import "./App.css"

function ForgotPassword() {
    return (
        <div className="card m-auto p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-fit max-w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[rgba(10, 21, 26, 0.7)]">
            <div className="reset-password-form mx-8">
                <p className="text-3xl font-bold mb-5">Wachtwoord vergeten?</p>
                
                <form className="mb-5 flex flex-col gap-4 items-center" action="/login" method="POST">
                    <div className="relative placeholder-black">
                        <input className="p-4 text-black border-2 border-black border-solid rounded-2xl w-108 bg-[#64646433]" type="email" name="email" id="email" placeholder="Email*" required />
                    </div>
                    <button className="bg-[#2be295] w-52 p-2 rounded-4xl mt-6 min-w-fit text-black shadow-[0px_-3px_#0f202733_inset] cursor-pointer text-lg font-bold" type="submit">Vraag nieuw wachtwoord aan</button>
                </form>
                <a href="/Login-Prototype">Ga terug naar de login pagina</a>
            </div>
        </div>
    )
}
export default ForgotPassword