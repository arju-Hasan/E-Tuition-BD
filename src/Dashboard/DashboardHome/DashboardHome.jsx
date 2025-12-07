import React from 'react';
import TutiorDashboardHome from './TutiorDashboardHome';
import AdminDashboardHome from './AdminDashboardHome';
import UserDashboardHome from './UserDashboardHome';
import useRole from '../../hooks/useRole';
import Loader from '../../components/Loading/Loading';

const DashboardHome = () => {
    const { role, roleLoading } = useRole();
    if (roleLoading) {
        return <Loader />
    }
    if (role === 'admin') {
        return <AdminDashboardHome />
    }
    else if (role === 'tutor') {
        return <TutiorDashboardHome />
    }
    else {
        return <UserDashboardHome />
    }
};

export default DashboardHome;