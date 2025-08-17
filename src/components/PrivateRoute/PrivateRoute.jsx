import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  // Show nothing (or a spinner) while Firebase checks auth
  if (loading) return <div>Loading...</div>;

  // If logged in, render the children, otherwise kick to login
  return user ? children : <Navigate to="/login" replace />;
}
