import { FC, } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Main } from './pages/Main/Main';
import './App.css'
import { Auth } from './pages/Auth/Auth';
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


