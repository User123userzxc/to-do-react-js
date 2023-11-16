// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Подключение стилей

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Проверка данных пользователя в локальном хранилище
        const storedUser = JSON.parse(localStorage.getItem('userData'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            // Если вход успешен, перенаправление на страницу с профилем
            navigate('/profile');
        } else {
            // Обработка ошибки входа (можете добавить сообщение об ошибке)
            console.log('Неверные учетные данные');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Вход</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">
                Войти
            </button>
        </div>
    );
};

export default Login;
