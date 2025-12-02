import "./App.css"

function ForgotPassword() {
    return (
        <div className="card">
            <div className="reset-password-form">
                <p className="text-3xl font-bold mb-5">Wachtwoord vergeten?</p>
                
                <form className="mb-5" action="/login" method="POST">
                    <div className="relative">
                        <input type="email" name="email" id="email" placeholder="Email*" required />
                    </div>
                    <input className="btn" type="submit" value="Vraag nieuw wachtwoord aan" />
                </form>
                <a href="/Login-Prototype">Ga terug naar de login pagina</a>
            </div>
        </div>
    )
}
export default ForgotPassword