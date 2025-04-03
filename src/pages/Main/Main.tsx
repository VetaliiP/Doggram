import { FC } from 'react';
import { useAuth } from '../../context/AuthContext';  // Импортируем useAuth
import { useNavigate } from 'react-router-dom';

export const Main: FC = () => {

    const { logout } = useAuth();  // Используем logout из контекста
    const navigate = useNavigate();  // Хук для навигации

    const handleLogout = () => {
        logout();  // Вызываем logout для выхода из системы
        navigate('/auth');  // Перенаправляем на страницу логина
    };

    return (
        <div>
            <h1>Главная страница</h1>
            <button onClick={handleLogout} className="bg-red-500 p-2 text-white rounded">
                Выход
            </button>
        </div>
    );
}


