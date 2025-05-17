import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, roles = [] }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isLoading: true,
        error: null
    });
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuthState({ isAuthenticated: false, isLoading: false });
            return;
        }

        // Verifikasi token
        axios.get('http://localhost:5000/api/auth/verify', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                if (response.data.valid) {
                    setAuthState({ isAuthenticated: true, isLoading: false });
                } else {
                    localStorage.removeItem('token');
                    setAuthState({ isAuthenticated: false, isLoading: false });
                }
            })
            .catch(error => {
                console.error('Verify error:', error);
                localStorage.removeItem('token');
                setAuthState({ isAuthenticated: false, isLoading: false });
            });
    }, [location.pathname]);

    // Tampilkan loading state
    if (authState.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    // Redirect ke login jika tidak terautentikasi
    if (!authState.isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from: location.pathname,
                    error: authState.error || 'Please login first'
                }}
            />
        );
    }

    // Render children atau outlet jika terautentikasi
    return children ? children : <Outlet />;
};

export default ProtectedRoute;