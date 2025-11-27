import { Link } from "react-router-dom";
import "./App.css";

function Mainpage() {
    return (
        <div className="card">
            <h1>Welcome to the App</h1>
            <p>
                <Link to="/Login-Prototype">Login page prototype</Link>
            </p>
            <p>
                <Link to="/Register">Register page prototype</Link>
            </p>
        </div>
    );
}

export default Mainpage;
