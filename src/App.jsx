import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/index.css';

function App() {
  return (
    <Routes>
      <Route element={<Register />} path="/cadastro" />
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
    </Routes>
  );
}

export default App;
