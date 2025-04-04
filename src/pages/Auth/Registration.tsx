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
        <div className="flex flex-col items-center justify-center w-[400px] h-auto bg-[#565655E5] opacity-90 text-[#F0EDE5] rounded-[10px] mx-10 my-5 py-14 ">
            <img src="/DOG.svg" className="mb-8" />
            <img src="/GRAM.svg" className="mb-20" />
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-stretch gap-4 w-[300px]">
                <div className="flex flex-row">
                    <label htmlFor="username" className="flex items-center justify-center border-b-2 border-r-2 border-gray-300 p-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border-b-2 border-gray-300 focus:outline-none w-full pl-2"
                    />
                </div>
                <div className="flex flex-row">
                    <label htmlFor="password" className="flex items-center justify-center border-b-2 border-r-2 border-gray-300 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-b-2 border-gray-300 focus:outline-none w-full pl-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirmPassword" className="flex items-center justify-start">Подтвердите пароль</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="border-b-2 border-gray-300 focus:outline-none w-full pl-2"
                    />
                </div>
                {error && <div>{error}</div>}
                <button onClick={handleRegister} className="bg-[#9E5330] py-4 rounded-[10px] cursor-pointer">Зарегистрироваться</button>
                <button onClick={() => navigate("/auth")} className="bg-[#9E5330] py-4 rounded-[10px] cursor-pointer"> Lig in</button>
            </form>
        </div>
    );
};

