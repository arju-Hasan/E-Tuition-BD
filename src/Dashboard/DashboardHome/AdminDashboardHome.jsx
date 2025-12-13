import React from 'react';
import PandingJobRequest from '../AdminPage/PandingJobRequest';
import PandingUserRequest from '../AdminPage/PandingUserRequest';

const AdminDashboardHome = () => {
    return (
        <div>
            <PandingJobRequest />
            <PandingUserRequest />
        </div>
    );
};

export default AdminDashboardHome;