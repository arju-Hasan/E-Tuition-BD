import React, { useEffect, useState } from 'react';
import { MdOutlineLogout } from "react-icons/md";
import NavBar from '../Pages/Home/Shard/Navbar';
import { Link, NavLink, Outlet } from 'react-router';
import Footer from '../Pages/Home/Shard/Footer';
import useRole from '../hooks/useRole';
import logoImg from '../assets/logo.png'
import { FaMotorcycle, FaRegCreditCard, FaTasks, FaUsers } from 'react-icons/fa';
import { RiEBikeFill } from 'react-icons/ri';
import { SiGoogletasks } from 'react-icons/si';
import { CiDeliveryTruck } from 'react-icons/ci';
import { SquareArrowLeft, SquareArrowRight } from 'lucide-react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardLayout = () => {
    const { user, logOut, loading } = useAuth();
    const { role } = useRole();
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState(null); //db user data
    const axiosSecure = useAxiosSecure();
    
          useEffect(() => {
        if (user?.email) {
         axiosSecure
            .get(`/users/${user.email}`)
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
        }
      }, [user?.email]);
            console.log("DB user data", userData);

     // Checkbox change detect
  useEffect(() => {
    const drawer = document.getElementById("my-drawer-4");

    const handleChange = () => {
      setIsOpen(drawer.checked);
    };

    drawer.addEventListener("change", handleChange);

    return () => drawer.removeEventListener("change", handleChange);
  }, []);

 const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto ">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost text-primary">
                    {isOpen ? <SquareArrowLeft /> : <GiHamburgerMenu className='text-2xl' />}
                </label>
                <div className="px-4 text-2xl font-bold">
                    <span className="text-rotate">
                    <span><span>Dashboard</span><span>E-Tuition-BD</span>
                    <span>Dashboard</span><span>E-Tuition-BD</span></span>
                    </span>
                    </div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
                <Footer />

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                
             <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-0 is-drawer-open:w-64">

                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link className='is-drawer-close:hidden bg-base-100 is-drawer-close:tooltip-right mb-5' to="/"><img src={logoImg} alt="" /></Link>
                        </li>                      

                        {/* all user */}
                      
                        {                            
                            <div className="is-drawer-close:hidden is-drawer-close:tooltip-right mb-5">
                                 <img className='w-30 h-30 mx-auto rounded-full overflow-hidden border border-secondary my-5' src={userData?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />
                                <h2 className='text-xl font-bold text-center'>{userData?.displayName}</h2>
                                <p className='text-center mx-auto font-extrabold'>ID: {userData?.userId}</p>
                                <p className='text-center'>{userData?.email}</p>
                                

                            </div>
                        }
                        {/* user only links */}
                        {
                            role === 'user' && <>
                              {/* <h2></h2> */}
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Completed Deliveries" to="/dashboard/tutorrequest">
                                        <SiGoogletasks />
                                        <span className="is-drawer-close:hidden">Tutor Request</span>
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Completed Deliveries" to="/dashboard/sPosted">
                                        <SiGoogletasks />
                                        <span className="is-drawer-close:hidden">Posted Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Completed Deliveries" to="/dashboard/userprofile">
                                        <SiGoogletasks />
                                        <span className="is-drawer-close:hidden">Update profile</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* Tutor link only */}
                        {
                            role ==='tutor' && <>
                                 <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard/jobrequest">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Job Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard/postedrequesr">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden"> Posted Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard/tutorprofile">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Update Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* admin only links */}
                        {
                            role === 'admin' && <>
                                 <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard">
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Approve Riders" to="/dashboard/pjrequest">
                                        <FaMotorcycle />
                                        <span className="is-drawer-close:hidden">Tutor Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Assign Riders" to="/dashboard/purequest">
                                        <RiEBikeFill />
                                        <span className="is-drawer-close:hidden">User Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Users Management" to="/dashboard/users-management">
                                        <FaUsers></FaUsers>
                                        <span className="is-drawer-close:hidden">Users Management</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* List item */}
                        <li>
                            <button onClick={handleLogOut} className="is-drawer-close:hidden is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <MdOutlineLogout />
                                <span className="is-drawer-close:hidden">LogOut</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default DashboardLayout;