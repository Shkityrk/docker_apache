import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Проверка токена при загрузке страницы
        authService.checkAuth().then((isAuthenticated) => {
            if (isAuthenticated) {
                navigate('/user');
            }
        });
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Попытка выполнить логин через authService
            const response = await authService.login(username, password);

            // Проверяем, есть ли в ответе сервера индикатор успешного логина
            if (response.success) {
                setMessage('Вход выполнен успешно');
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/user');
                }, 2000); // Задержка в 2 секунды перед редиректом
            } else {
                // Если логин неудачный, выводим сообщение об ошибке
                setMessage('Неверное имя пользователя или пароль');
                setIsSuccess(false);
            }
        } catch (err) {
            // Ловим любую ошибку, произошедшую при логине
            setMessage('Неверное имя пользователя или пароль');
            setIsSuccess(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <h2 style={styles.title}>Вход</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Имя пользователя:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Пароль:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    {message && (
                        <p style={isSuccess ? styles.success : styles.error}>{message}</p>
                    )}
                    <button type="submit" style={styles.button}>Войти</button>
                </form>
                <p>
                    Нет аккаунта? <a href="/register" style={styles.link}>Зарегистрироваться</a>
                </p>
            </div>
        </div>
    );
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4', // светлый фон
    },
    formWrapper: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formGroup: {
        marginBottom: '15px',
        width: '100%',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '16px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
    },
};

export default Login;
