import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function ProtectedPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const isAuthenticated = await authService.checkAuth();
            if (!isAuthenticated) {
                navigate('/');
            }
        };
        checkAuthentication();
    }, [navigate]);

    const handleLogout = async () => {
        await authService.logout();
        navigate('/');
    };

    return (
        <div
            style={{
                position: 'relative', // Родительский элемент должен быть относительным
                height: '100vh',      // Занимаем всю высоту экрана
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f4f4f4', // фон для визуализации
            }}
        >
            <div
                style={{
                    backgroundImage: 'url(https://sun9-29.userapi.com/impg/b3B-9yvsVjX6KduhQ_vCNUhah0Xp3NDhNZ-hqQ/xK6ryOZ3GO4.jpg?size=485x320&quality=95&sign=f5a1491a29c5edb787e2409864f55311&type=album)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '320px',      // Высота картинки
                    width: '485px',       // Ширина картинки
                }}
            />
            <button
                onClick={handleLogout}
                style={{
                    position: "absolute",
                    top: '10px',
                    right: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Выйти
            </button>
        </div>
    );
}

export default ProtectedPage;
