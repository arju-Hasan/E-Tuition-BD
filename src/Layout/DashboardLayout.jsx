import React, { useEffect, useState } from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router';
import Footer from '../Pages/Home/Shard/Footer';
import useRole from '../hooks/useRole';
import logoImg from '../assets/logo.png'
import { FaMotorcycle, FaTasks, FaUsers } from 'react-icons/fa';
import { RiEBikeFill } from 'react-icons/ri';
import { SiGoogletasks } from 'react-icons/si';
import { SquareArrowLeft} from 'lucide-react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from 'sweetalert2';
import { FaCodePullRequest, FaSignsPost } from 'react-icons/fa6';
import { CgProfile } from "react-icons/cg";

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
            // console.log("DB user data", userData);

     // Checkbox change detect
  useEffect(() => {
    const drawer = document.getElementById("my-drawer-4");

    const handleChange = () => {
      setIsOpen(drawer.checked);
    };

    drawer.addEventListener("change", handleChange);

    return () => drawer.removeEventListener("change", handleChange);
  }, []);

//  const handleLogOut = () => {
//         logOut()
//             .then()
//             .catch(error => {
//                 console.log(error)
//             })
//     }
 const handleLogOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "Logout Right Now",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
              logOut()            
                  .then() 
                   Swal.fire({ title: "Logout!!!",
                        text: "Logout Successful",
                        icon: "success"
               }); 
            }
        });
    }


    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto ">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle"  defaultChecked />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-200">
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
                            <Link className='is-drawer-close:hidden bg-base-300 is-drawer-close:tooltip-right mb-5' to="/"><img src={logoImg} alt="" /></Link>
                        </li>                      

                        {/* all user */}                      
                        {                            
                            <div className="is-drawer-close:hidden is-drawer-close:tooltip-right mb-5 shadow-2xl shadow-secondary rounded-2xl m-3 p-2">
                                 <img className='w-30 h-30 mx-auto rounded-full overflow-hidden border border-secondary my-5' src={userData?.photoURL || "https://i.ibb.co.com/kgMj4c4G/pngtree-user-icon-isolated-on-abstract-background-png-image-5192160.jpg"} alt="Avater" />
                                <h2 className='text-xl font-bold text-center'>{userData?.displayName}</h2>
                                <p className='text-center mx-auto font-extrabold'>ID: {userData?.userId}</p>
                                <p className='text-center'>{userData?.email}</p>
                                

                            </div>
                        }
                        <div className='m-3 space-y-2 font-semibold'>
                        {/* user only links */}
                        {
                            role === 'user' && <>
                              {/* <h2></h2> */}
                                <li className=''>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Assigned Deliveries" to="/dashboard" end >
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Completed Deliveries" to="/dashboard/tutorrequest">
                                        <SiGoogletasks />
                                        <span className="is-drawer-close:hidden">Tutor Request</span>
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Completed Deliveries" to="/dashboard/sPosted">
                                        <SiGoogletasks />
                                        <span className="is-drawer-close:hidden">Posted Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Completed Deliveries" to="/dashboard/userprofile">
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
                                   <NavLink
                                to="/dashboard" end
                                className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`
                                } data-tip="Assigned Deliveries" 
                                >
                                <FaTasks />
                                <span className="is-drawer-close:hidden">Dashboard</span>
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`
                                } data-tip="Assigned Deliveries" to="/dashboard/jobrequest">
                                        <FaCodePullRequest />
                                        <span className="is-drawer-close:hidden">Job Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} 
                                    data-tip="Assigned Deliveries" to="/dashboard/postedrequesr">
                                                                        <FaSignsPost />
                                        <span className="is-drawer-close:hidden"> Posted Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Assigned Deliveries" to="/dashboard/tutorprofile">
                                        <CgProfile />
                                        <span className="is-drawer-close:hidden">Update Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* admin only links */}
                        {
                            role === 'admin' && <>
                                 <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Assigned Deliveries" to="/dashboard" end >
                                    
                                        <FaTasks />
                                        <span className="is-drawer-close:hidden">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Approve Riders" to="/dashboard/pjrequest">
                                        <FaMotorcycle />
                                        <span className="is-drawer-close:hidden">Tutor Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Assign Riders" to="/dashboard/purequest">
                                        <RiEBikeFill />
                                        <span className="is-drawer-close:hidden">User Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right ${
                                    isActive ? "bg-secondary text-white font-bold" : ""
                                    }`} data-tip="Users Management" to="/dashboard/users-management">
                                        <FaUsers></FaUsers>
                                        <span className="is-drawer-close:hidden">Users Management</span>
                                    </NavLink>
                                </li>
                            </>
                        }                       
                        
                        {/* List item */}
                        <li>
                            <button onClick={handleLogOut} className={
                                    `is-drawer-close:hidden is-drawer-close:tooltip-right  "bg-secondary font-bold" 
                                    `}  data-tip="Settings">
                                {/* Settings icon */}
                                <MdOutlineLogout />
                                <span className="is-drawer-close:hidden">LogOut</span>
                            </button>
                        </li>

                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};
export default DashboardLayout;