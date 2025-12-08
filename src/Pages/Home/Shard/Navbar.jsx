import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../Components/Logo/Logo';
import Container from '../../../Components/Container';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const NavBar = () => {
    const { user, logOut, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    // console.log("firebase user", user);
     const [userData, setUserData] = useState(null); //db user data

      useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log(err));
    }
  }, [user?.email]);
        // console.log("DB user data", userData?.userId);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    // console.log(user);
    const activeLink = ({ isActive }) =>
    isActive ? " bg-primary text-white hover:bg-secondary px-3 py-2 rounded" : "";

    const links = <>
        <li><NavLink className={activeLink} to="/">Home</NavLink></li>
        <li><NavLink className={activeLink} to="/tuitions">Tuitions</NavLink></li>
        <li><NavLink className={activeLink} to="/tutiors">Tutiors</NavLink></li>        
        <li><NavLink className={activeLink} to="/c">Contact</NavLink></li>
        {user ? (<>
        <li><NavLink className={activeLink} to="/dashboard">Dashboard</NavLink></li>
        {["user", "super-admin"].includes(userData?.role) && (
         <li><NavLink className={activeLink} to="/">Tuitions post</NavLink></li>   
        )}
            </>
        ) : null}            
        <li><NavLink className={activeLink} to="/about">About Us</NavLink></li>
    </>






    return (
        <div className='shadow-sm bg-white/30 backdrop-blur   sticky top-0 z-10'>
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
                <ul className="menu menu-horizontal px-1 p-0 m-0 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
               {
                loading ? <span className="loading loading-ring loading-xl"></span> :
                 user ? (<>
                     {/* <nav className="flex justify-between items-center p-4 bg-base-100">
                    <ThemeToggleButton />
                    </nav> */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1 ">
                        <img className='w-10 h-10 mx-auto rounded-full overflow-hidden border border-secondary mr-1' src={user?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />

                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">
                        <Link to={"/dashboard"} className="tooltip" data-tip="Click to Profile">
                            <img className='w-25 h-25 mx-auto rounded-full overflow-hidden border border-secondary' src={user?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />
                        </Link>

                        <h2 className='text-xl font-semebold'>{user?.displayName}</h2>
                        <span className='font-extrabold'>ID: {userData?.userId}</span>
                        <p className='text-black'>{user?.email}</p>
                        <button onClick={handleLogOut} 
                        className={"btn bg-primary hover:bg-secondary text-white"}
                        // className='slice'
                        >Sign Out</button>
                    </ul>
                </div></>
                 ) : (
                <Link
                    to="/login"
                    className="btn btn-sm mr-2 text-white bg-primary hover:bg-secondary border"
                >
                    Log in
                </Link>

                )
               }             
            </div>
        </div>
       
        </Container>
        </div>     
    );
};


export default NavBar;