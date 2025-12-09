import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { NavLink } from 'react-router';

const TutorProfile = () => {
     const { user, logOut, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    // console.log("firebase user", user);
     const [userData, setUserData] = useState(null); //db user data
     console.log("db user data" , userData);
     const tut = userData;

      useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log(err));
    }
  }, [user?.email]);
    return (
        <div className='bg-white p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <img className='w-50 h-50 mx-auto profile-img'  src={tut?.photoURL} alt="" />
            <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>                
                <h2>Name: {tut?.displayName}</h2>
                <p>Your ID: {tut?.userId}</p>
                <p>Email: {tut?.email}</p>
                <p>Phone: {tut?.Phone}</p>
                <p>Gender: {tut?.gender}</p>
                             
            </div>
            <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>
                <p>Last Education: {tut?.lastEducation}</p>
                <p>Experience: {tut?.experience}</p> 
                <p>District: {tut?.district}</p>
                <p>Region: {tut?.region}</p>
                <p>Available: {tut?.available}</p> 
            </div>
            </div>
            {/* button section  */}
            <div className='grid grid-cols-3 mt-10 te justify-center items-center'>
                <NavLink  className="mx-auto btn-c">Update Profile</NavLink>
                <NavLink to="/dashboard/postedrequesr" className="mx-auto btn-c">Tution Request</NavLink>
                <NavLink to="/dashboard" className="mx-auto btn-c">More Details</NavLink>
            </div>
            
        </div>
    );
};

export default TutorProfile;

