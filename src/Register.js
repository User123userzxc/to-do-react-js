// Register.js
import React, { useState } from 'react';
import './styles.css'; // Подключение стилей

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        const userData = { username, password };

        // Сохранение данных в localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Вызов колбэка onRegister с данными пользователя
        onRegister(userData);
    };

    return (
        <div className="register-container">
            <h2 className="register-heading">Регистрация</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="register-input"
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
            />
            <button onClick={handleRegister} className="register-button">
                Зарегистрироваться
            </button>
        </div>
    );
};

export default Register;
