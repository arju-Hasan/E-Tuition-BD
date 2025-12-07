import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../components/Loading/Loading';
import useRole from '../hooks/useRole';


const RiderRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <Loader />
    }

    if (role !== 'rider') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default RiderRoute;