import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-2xl font-semibold text-center my-6'><PulseLoader color="rgba(0, 0, 0, 1)" /></h1>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;