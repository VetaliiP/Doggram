import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const storedUser = localStorage.getItem(username);

        if (!storedUser) {
            setError("Пользователь не найден");
            return;
        }

        const userData = JSON.parse(storedUser);

        if (userData.password !== password) {
            setError("Неверный пароль");
            return;
        }

        // Сохраняем в localStorage информацию о том, что пользователь авторизован
        localStorage.setItem("auth", "true");

        // Перенаправляем на главную страницу
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center w-[400px] h-auto bg-[#565655E5] opacity-90 text-[#F0EDE5] rounded-[10px] mx-10 my-5 py-14 ">
            {/* <h2 className="flex flex-col items-center text-6xl font-bold mb-20">
                <span>DOG</span>
                <span>GRAM</span>
            </h2> */}
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
                {error && <div>{error}</div>}
                <div className="flex justify-end text-gray-400">
                    <a href="#">Forget password?</a>
                </div>
                <button onClick={handleLogin} className="bg-[#9E5330] py-4 rounded-[10px] cursor-pointer">Log in</button>
                <span className="flex flex-row self-center mb-8">
                    Don`t have an account?
                    <button onClick={() => navigate("/register")} className="ml-2 cursor-pointer"> Sign-up</button>
                </span>
                <div className="flex flex-row items-center justify-center mb-10">
                    <div className="border-t border-gray-300 flex-1" ></div>
                    <span className="flex-1 px-2">
                        <p className="whitespace-nowrap">Or login with in</p>
                    </span>
                    <div className="border-t border-gray-300 flex-1">
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-8 mb-10">
                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg>
                    </button>
                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </button>
                </div>

            </form >
        </div >
    );
};


