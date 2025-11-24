import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Login-Prototype" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;