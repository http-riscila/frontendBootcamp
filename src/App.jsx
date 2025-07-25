import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import "./styles/App.css";
import { UserProvider } from "./contexts/UserContext";
// import PrivateRoutes from "./components/PrivateRoutes"; // ← Mantenha comentado
import Home from "./pages/Home";
import Community from "./pages/Community";
import Communities from "./pages/Communities";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        
        {/* Rotas sem proteção para teste */}
        <Route path="/home" element={<Home />} />
        <Route path="/comunidade" element={<Community />} />
        <Route path="/comunidades" element={<Communities />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
    </UserProvider>
  );
}

export default App;