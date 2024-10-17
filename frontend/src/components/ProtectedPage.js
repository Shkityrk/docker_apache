import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function ProtectedPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const isAuthenticated = await authService.checkAuth();
            if (!isAuthenticated) {
                navigate('/');
            } else {
                setLoading(false);  // Если аутентификация успешна, убираем состояние загрузки
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
                position: 'relative',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f4f4f4',
            }}
        >
            <div
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/originals/9f/3f/53/9f3f53a78674ed04480f9327e42566ec.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '900px',
                    width: '900px',
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
