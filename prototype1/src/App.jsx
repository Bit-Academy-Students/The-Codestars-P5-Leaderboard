import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";
import Register from "./register";
import ForgotPassword from "./forgot-password";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/Login-Prototype" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Forgot-Password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;