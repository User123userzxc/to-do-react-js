// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (credentials) => {
        // Ваша логика для авторизации
        // ...
        setIsAuthenticated(true);
    };

    const handleRegister = (userInfo) => {
        // Ваша логика для регистрации
        // ...
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Добро пожаловать!</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Login" style={{ display: isAuthenticated ? 'none' : 'block' }}>
                                    Авторизация
                                </Link>
                            </li>
                            <li>
                                <Link to="/Register" style={{ display: isAuthenticated ? 'none' : 'block' }}>
                                    Регистрация
                                </Link>
                            </li>
                            {isAuthenticated && (
                                <li>
                                    <Link to="/Profile">Профиль</Link>
                                    {/* Другие элементы навигации для авторизованных пользователей */}
                                </li>
                            )}
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/Register" element={<Register onRegister={handleRegister} />} />
                        <Route path="/Profile" element={<Profile isAuthenticated={isAuthenticated} />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
