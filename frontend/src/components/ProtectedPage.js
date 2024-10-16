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
                    backgroundImage: 'url(https://i.pinimg.com/originals/9f/3f/53/9f3f53a78674ed04480f9327e42566ec.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '900px',      // Высота картинки
                    width: '900px',       // Ширина картинки
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
