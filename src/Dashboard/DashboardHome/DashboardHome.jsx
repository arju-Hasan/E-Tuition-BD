import React from 'react';
import TutiorDashboardHome from './TutiorDashboardHome';
import AdminDashboardHome from './AdminDashboardHome';
import UserDashboardHome from './UserDashboardHome';
import useRole from '../../hooks/useRole';

const DashboardHome = () => {
    const { role, roleLoading } = useRole();
    if (roleLoading) {
        return <Loading></Loading>
    }
    if (role === 'admin') {
        return <AdminDashboardHome />
    }
    else if (role === 'rider') {
        return <TutiorDashboardHome />
    }
    else {
        return <UserDashboardHome />
    }
};

export default DashboardHome;