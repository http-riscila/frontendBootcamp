import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export default function PrivateRoutes({ children }) {
  const { user } = useUser();
  const token = localStorage.getItem("token");

  if (!user && !token) {
    return <Navigate to="/" replace />;
  }
  return children;
}
