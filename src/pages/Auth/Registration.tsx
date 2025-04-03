import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        const existingUser = localStorage.getItem(username);
        if (existingUser) {
            setError("Пользователь с таким именем уже существует");
            return;
        }

        // Сохраняем пользователя в localStorage
        const userData = { username, password };
        localStorage.setItem(username, JSON.stringify(userData));

        // Перенаправляем на страницу входа
        navigate("/auth");
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="username">Логин</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Подтвердите пароль</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div>{error}</div>}
                <button onClick={handleRegister}>Зарегистрироваться</button>
            </form>
        </div>
    );
};

