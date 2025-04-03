
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter"
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);
