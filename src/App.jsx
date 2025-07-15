import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import "../src/styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register-user" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
