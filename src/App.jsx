import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import "./styles/App.css";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Communities from "./pages/Communities";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>

      <UserProvider>
        <Routes>
          {/* Rotas privadas */}
          <Route
            path="/home"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
          <Route
            path="/community/:communityId"
            element={
              <PrivateRoutes>
                <Community />
              </PrivateRoutes>
            }
          />
          <Route
            path="/comunidades"
            element={
              <PrivateRoutes>
                <Communities />
              </PrivateRoutes>
            }
          />
          <Route
            path="/como-funciona"
            element={
              <PrivateRoutes>
                <HowItWorks />
              </PrivateRoutes>
            }
          />
          <Route
            path="/perfil"
            element={
              <PrivateRoutes>
                <UserProfile />
              </PrivateRoutes>
            }
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
