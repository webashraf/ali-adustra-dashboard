import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {loading, user} = useContext(AuthContext);

    if(loading) {
        return <h2 className='text-4xl font-serif'>Loading.......</h2>
    }
    return user ? children :  <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;