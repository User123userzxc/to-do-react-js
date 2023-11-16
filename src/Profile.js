// Profile.js
import React, { useState, useEffect } from 'react';
import './index.css';
import './index.css';

const Profile = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Замените на вашу логику
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        // Загрузка задач из локального хранилища при монтировании компонента
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodoList(storedTodos);
    }, []);

    useEffect(() => {
        // Сохранение задач в локальное хранилище при изменении todoList
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodoList([...todoList, newTodo]);
            setNewTodo('');
        }
    };

    const handleEditTodo = (index) => {
        setEditingIndex(index);
        setNewTodo(todoList[index]);
    };

    const handleUpdateTodo = () => {
        if (newTodo.trim() !== '') {
            const updatedTodos = [...todoList];
            updatedTodos[editingIndex] = newTodo;
            setTodoList(updatedTodos);
            setEditingIndex(null);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todoList];
        updatedTodos.splice(index, 1);
        setTodoList(updatedTodos);
        setEditingIndex(null);
        setNewTodo('');
    };

    return (
        <div>
            <h2>Профиль пользователя</h2>
            {isAuthenticated && (
                <div>
                    <h3>Список задач</h3>
                    <ul>
                        {todoList.map((todo, index) => (
                            <li key={index}>
                                {index === editingIndex ? (
                                    <>
                                        <input
                                            type="text"
                                            value={newTodo}
                                            onChange={(e) => setNewTodo(e.target.value)}
                                        />
                                        <button onClick={handleUpdateTodo}>Сохранить</button>
                                    </>
                                ) : (
                                    <>
                                        {todo}
                                        <button onClick={() => handleEditTodo(index)}>Редактировать</button><br/>
                                        <button onClick={() => handleDeleteTodo(index)}>Удалить</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <input
                            type="text"
                            placeholder="Новая задача"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                       <br/> <button onClick={editingIndex !== null ? handleUpdateTodo : handleAddTodo}>
                            {editingIndex !== null ? 'Обновить' : 'Добавить'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
