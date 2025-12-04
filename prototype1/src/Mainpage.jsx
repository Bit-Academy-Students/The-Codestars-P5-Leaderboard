import { Link } from 'react-router-dom';
import './App.css';

function Mainpage() {
    return (
        <div className="card flex flex-col">
            <p className="text-3xl font-bold mb-5">Welcome to the App</p>
            <Link className="text-black no-underline" to="/Login-Prototype">Login page prototype</Link>
            <Link className="text-black no-underline" to="/registerpage">register page prototype</Link>
        </div>
    );
}

export default Mainpage;
