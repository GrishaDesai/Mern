import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token'); // Check authentication status

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login page if not authenticated
        }
    }, [isAuthenticated, navigate]); // Update dependencies

    return isAuthenticated ? children : null; // Render children if authenticated
};

export default ProtectedRoute;
