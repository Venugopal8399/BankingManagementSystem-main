// src/core/url.js
import axios from "axios";

// Get token from localStorage
const getToken = () => localStorage.getItem("token") || null;

// Attach interceptors to an Axios instance
const attachInterceptors = (axiosInstance) => {
    // Inject Authorization header
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Handle unauthorized responses
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("accountNumber");
                window.location.href = "/";
            }
            return Promise.reject(error);
        }
    );
};

// Create Axios instances
export const authApi = axios.create({
    baseURL: import.meta.env.VITE_AUTH_API,
});

export const bankApi = axios.create({
    baseURL: import.meta.env.VITE_BANK_API,
});

export const trxnApi = axios.create({
    baseURL: import.meta.env.VITE_TRXN_API,
});

// Attach interceptors
[authApi, bankApi, trxnApi].forEach(attachInterceptors);
