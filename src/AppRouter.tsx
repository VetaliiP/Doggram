import { FC, } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Layout } from "./components/Layout/Layout";
import { Main } from './pages/Main/Main';
import { Search } from './pages/Search/Search';
import { Messages } from './pages/Messages/Messages';
import { Notification } from './pages/Notification/Notification';
import { Publication } from './pages/Publication/Publication';
import { Profile } from './pages/Profile/Profile';
import { More } from './pages/More/More';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css'
import { Auth } from './pages/Auth/Auth';
import { useAuth } from './context/AuthContext';
import { Registration } from './pages/Auth/Registration';



export const AppRouter: FC = () => {

    const isAuthenticated = localStorage.getItem("auth") === "true";

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuthenticated ? <Main /> : <Navigate to="/auth" />
                        }
                    />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};


