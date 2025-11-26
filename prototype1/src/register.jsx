import "./App.css"

function Register() {
    return (
        <div>
            <h1>Register page</h1>
            <form action="/register" method="POST">
                <label for="name">name:</label>
                <input type="text" name="name" id="name" />

                <label for="email">email:</label>
                <input type="email" name="email" id="email" />
                
                <label for="password">password:</label>
                <input type="password" name="password" id="password" />
                
                <label for="role">role:</label>
                <select name="role" id="role">
                    <option value="admin">Coach</option>
                    <option value="student">Student</option>
                </select>
                
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register