import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Типизация контекста
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Создаем контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер контекста
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Проверяем на старте, сохранено ли значение в localStorage
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        localStorage.getItem('auth') === 'true'  // если в localStorage установлено значение "true", значит авторизован
    );

    const login = () => {
        localStorage.setItem('auth', 'true');  // сохраняем информацию о том, что пользователь авторизован
        setIsAuthenticated(true);  // обновляем состояние
    };

    const logout = () => {
        localStorage.removeItem('auth');  // удаляем информацию из localStorage
        setIsAuthenticated(false);  // обновляем состояние
    };

    // Используем useEffect для того, чтобы проверять состояние на каждое изменение
    useEffect(() => {
        // Когда пользователь выходит из системы, очищаем localStorage
        if (!isAuthenticated) {
            localStorage.removeItem('auth');
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
