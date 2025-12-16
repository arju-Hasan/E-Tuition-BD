import React from 'react';
import PandingJobRequest from '../AdminPage/PandingJobRequest';
import PandingUserRequest from '../AdminPage/PandingUserRequest';
import AdminChart from '../AdminPage/AdminChart';
import UserManagement from '../AdminPage/UserManagement';

const AdminDashboardHome = () => {
    return (
        <div>
            <AdminChart />
            <UserManagement />
            <PandingJobRequest />
            <PandingUserRequest />
        </div>
    );
};

export default AdminDashboardHome;