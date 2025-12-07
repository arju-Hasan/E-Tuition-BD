import React from 'react';
import NavBar from '../Pages/Home/Shard/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Home/Shard/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default DashboardLayout;