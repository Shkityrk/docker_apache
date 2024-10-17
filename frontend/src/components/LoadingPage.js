import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const isAuthenticated = await authService.checkAuth();
            if (isAuthenticated) {
                navigate('/user');
            } else {
                navigate('/login');
            }
        };

        checkToken();
    }, [navigate]);

    return (
        <div style={styles.container}>
            <div style={styles.loader}>Загрузка...</div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    loader: {
        fontSize: '24px',
        color: '#333',
    },
};

export default LoadingPage;
