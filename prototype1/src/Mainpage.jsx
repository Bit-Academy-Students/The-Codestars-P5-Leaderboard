import { Link } from "react-router-dom";
import "./App.css";

function Mainpage() {
    return (
        <div className="card flex flex-col">
            <p className="text-3xl font-bold mb-5">Welcome to the App</p>
            <a href="/Login-Prototype">Login page prototype</a>
        </div>
    );
}

export default Mainpage;