import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "../src/styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );

}

export default App;
