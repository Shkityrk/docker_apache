// services/authService.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const authService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(
                `${API_URL}/login`,
                { username, password },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                const { access_token } = response.data; // Зависит от ответа сервера
                localStorage.setItem("token", access_token);
                return { success: true };
            }
            return { success: false, message: "Ошибка аутентификации" };
        } catch (error) {
            console.error("Ошибка при входе:", error);
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data.detail || "Ошибка при входе",
                };
            }
            return { success: false, message: "Ошибка при входе" };
        }
    },

    logout: async () => {
        await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    },

    checkAuth: async () => {
        try {
            const response = await axios.get(`${API_URL}/protected-route`, {
                withCredentials: true,
            });
            return response.status === 200;
        } catch (err) {
            return false;
        }
    },
};

export default authService;
