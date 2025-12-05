import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";
import ForgotPassword from "./forgot-password";
import RegisterPage from "./registerpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/Login-Prototype" element={<Login />} />
                <Route path="/Forgot-Password" element={<ForgotPassword />} />
                <Route path="/registerpage" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;