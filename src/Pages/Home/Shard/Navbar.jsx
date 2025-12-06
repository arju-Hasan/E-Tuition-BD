import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../Components/Logo/Logo';
import Container from '../../../Components/Container';
import useAuth from '../../../Hooks/useAuth';
import styled from 'styled-components';


const NavBar = () => {

    const { user, logOut, loading } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tuitions">Tuitions</NavLink></li>
        <li><NavLink to="/tutiors">Tutiors</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
        user ? (
            <>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/tutors">Tutors</NavLink></li>
            </>
        ) : null
        }         
              
        <li><NavLink to="/about">About Us</NavLink></li>

    </>
    return (
        <div className='shadow-sm bg-white/30 backdrop-blur  sticky top-0 z-10'>
        <Container>    
        <div className="navbar min-h-0 p-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <span className="text-xl ">
                    <Logo></Logo>
                </span>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 p-0 m-0">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
               {
                loading ? <span className="loading loading-ring loading-xl"></span> :
                 user ? (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                        <img className='w-10 mx-auto rounded-full overflow-hidden border border-secondary' src={user?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />

                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">
                        <Link to={"/dashboard"} className="tooltip" data-tip="Click to Profile">
                            <img className='w-25 mx-auto rounded-full overflow-hidden border border-secondary' src={user?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />
                        </Link>

                        <h2 className='text-xl font-semebold'>{user?.displayName}</h2>
                        <p className='text-black'>{user?.email}</p>
                        <button onClick={handleLogOut} 
                        className={"btn bg-primary hover:bg-secondary text-white"}
                        // className='slice'
                        >Sign Out</button>
                    </ul>
                </div>
                 ) : (
                <Link
                    to="/login"
                    className="btn btn-sm mr-2 text-white bg-primary hover:bg-secondary border"
                >
                    Log in
                </Link>

                )
               } 
            {/* //             <a onClick={handleLogOut} className="btn">Log Out</a>
            //              <Link className='btn btn-sm' to="/login">Log in</Link>               */}
            
            </div>
        </div>
       
        </Container>
        </div>     
    );
};


export default NavBar;