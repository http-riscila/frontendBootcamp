import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );

}

export default App;
