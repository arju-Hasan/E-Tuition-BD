import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { NavLink } from 'react-router';

const UpdateProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

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

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axiosSecure.put(`/users/${userData._id}`, formData);

    if (res.data.modifiedCount > 0) {
      alert('Profile Updated Successfully');
      setUserData(formData);
      setShowForm(false);
    }
  };

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
                <p>Phone: {stu?.Phone}</p>
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
        <button onClick={() => setShowForm(!showForm)} className="btn-c mx-auto">
          Update Profile
        </button>
        <NavLink to="/dashboard/tutorrequest" className="btn-c mx-auto">
          Tutors Request
        </NavLink>
        <NavLink to="/dashboard/sPosted" className="btn-c mx-auto">
          More Details
        </NavLink>
      </div>

      {/* Update Form */}
      {showForm && (
        <form onSubmit={handleUpdate} className="mt-10 border p-5 rounded space-y-4">
          <h2 className="text-xl font-bold">Update Profile</h2>

          <input
            name="displayName"
            value={formData.displayName || ''}
            onChange={handleChange}
            placeholder="Name"
            className="input input-bordered w-full"
          />

          <input
            name="Phone"
            value={formData.Phone || ''}
            onChange={handleChange}
            placeholder="Phone"
            className="input input-bordered w-full"
          />

          <input
            name="district"
            value={formData.district || ''}
            onChange={handleChange}
            placeholder="District"
            className="input input-bordered w-full"
          />

          <input
            name="region"
            value={formData.region || ''}
            onChange={handleChange}
            placeholder="Region"
            className="input input-bordered w-full"
          />

          <select
            name="available"
            value={formData.available || ''}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Available?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button className="btn btn-success w-full">
            Confirm Update
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;

//  <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
//                 <img className='w-50 h-50 mx-auto profile-img'  src={stu?.photoURL} alt="" />
//             <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>                
//                 <h2>Name: {stu?.displayName}</h2>
//                 <p>Your ID: {stu?.userId}</p>
//                 <p>Email: {stu?.email}</p>
//                 <p>Phone: {stu?.Phone}</p>
//                 <p>Gender: {stu?.gender}</p>
//                              
//             </div>
//             <div className='border-l-3 border-secondary p-5 grid justify-cente font-bold text-md gap-2'>
//                 <p>Last Education: {stu?.lastEducation}</p>
//                 <p>Experience: {stu?.experience}</p> 
//                 <p>District: {stu?.district}</p>
//                 <p>Region: {stu?.region}</p>
//                 <p>Available: {stu?.available}</p> 
//             </div>
//             </div>