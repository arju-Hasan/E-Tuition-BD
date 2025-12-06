import React from 'react';
import Navbar from '../Pages/Home/Shard/Navbar';
import Footer from '../Pages/Home/Shard/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
            
        </div>
    );
};

export default RootLayout;