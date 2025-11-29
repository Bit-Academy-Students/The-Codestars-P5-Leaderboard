import "./App.css"

function Register() {
    return (
        <div className="card">
            <div className="register-form">
                <h2>Register page</h2>

                <form action="/register" method="POST">
                    <input type="text" name="name" id="name" placeholder="Naam*" required />
                    <input type="email" name="email" id="email" placeholder="Email*" required />
                    <input type="password" name="password" id="password" placeholder="Wachtwoord*" required />

                    <label htmlFor="role">Rol:</label>
                    <select name="role" id="role">
                        <option value="student">Student</option>
                        <option value="admin">Coach</option>
                    </select>

                    <input className="btn" type="submit" value="Registreer" />
                </form>
            </div>
        </div>
    )
}

export default Register