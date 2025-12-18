import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import Profile from './Profile';

const UpdateProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState(null);


  // load user data
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/${user.email}`)
        .then(res => {
          setUserData(res.data);
          setFormData(res.data); // form auto fill
        });
    }
  }, [user?.email]);
  const stu = userData;

  return (
    <div className="bg-white p-5">
      {/* Profile View */}
       <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <img className='w-50 h-50 mx-auto profile-img'  src={stu?.photoURL} alt="" />
            <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>                
                <h2>Name: {stu?.displayName}</h2>
                <p>Your ID: {stu?.userId}</p>
                <p>Email: {stu?.email}</p>
                <p>Phone: {stu?.phone}</p>
                <p>Gender: {stu?.gender}</p>
                             
            </div>
            <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>
                <p>Last Education: {stu?.lastEducation}</p>
                <p>Experience: {stu?.experience}</p> 
                <p>District: {stu?.district}</p>
                <p>Region: {stu?.region}</p>
                <p>Available: {stu?.available}</p> 
            </div>
        </div>

      {/* Buttons */}
      <div className="grid grid-cols-3 mt-10">
        <NavLink to="/dashboard/userprofile" className="btn-c mx-auto">
          Update Profile
        </NavLink>
        <NavLink to="/dashboard/tutorrequest" className="btn-c mx-auto">
          Tutors Request
        </NavLink>
        <NavLink to="/dashboard/sPosted" className="btn-c mx-auto">
          More Details
        </NavLink>
      </div>

    <Profile />    
     
    </div>
  );
};

export default UpdateProfile;

