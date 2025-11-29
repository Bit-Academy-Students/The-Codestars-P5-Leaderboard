import "./App.css"

function ForgotPassword() {
    return (
        <div className="card">
            <div className="reset-password-form">
                <h2>Wachtwoord opnieuw instellen</h2>
                <form action="/login" method="POST">
                    <input type="email" name="email" id="email" placeholder="Email*" required />

                    <input className="btn" type="submit" value="Vraag nieuw wachtwoord aan" />
                </form>
            </div>
        </div>
    )
}
export default ForgotPassword