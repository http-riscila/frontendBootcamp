import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import "../src/styles/App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/perfil"
          element={
            <UserProvider>
              <UserProfile />
            </UserProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
