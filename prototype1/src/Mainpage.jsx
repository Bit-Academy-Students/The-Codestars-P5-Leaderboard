import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>
        <Link to="/Login-Prototype">Login page prototype</Link>
      </p>
    </div>
  );
}

export default Mainpage;
