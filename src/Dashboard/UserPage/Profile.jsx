import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
  const { user } = useAuth(); // logged-in user
  const [formData, setFormData] = useState({
    displayName: '',
    phone: '',
    email: '',
    district: '',
    role: '',
    lastEducation: '',
    experience: '',
    gender: '',
    available: '',
    photoURL: '',
  });
  const [userId, setUserId] = useState('');

  // Fetch user info by email
  useEffect(() => {
    if (user?.email) {
       fetch(`http://localhost:3000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            if (data && data._id) {
            setFormData({
                displayName: data.displayName || '',
                email: data.email || '',
                phone: data.phone || '',
                district: data.district || '',
                role: data.role || '',
                lastEducation: data.lastEducation || '',
                experience: data.experience || '',
                gender: data.gender || '',
                available: data.available || '',
                photoURL: data.photoURL || '',
            });
            setUserId(data._id); // MongoDB _id
            
            } else {
            Swal.fire('Error', 'User not found or invalid response from server', 'error');
            }
        })
        .catch(err => {
            console.error(err);
            Swal.fire('Error', 'Failed to fetch user', 'error');
        });
        ;


    }
  }, [user]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log("userId:", userId);
  // Handle update
 const handleUpdate = () => {
  if (!userId) {
    Swal.fire('Error', 'User ID is missing!', 'error');
    return;
  }

  fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire('Success', 'Profile updated!', 'success');
      } else {
        Swal.fire('Info', 'No changes made.', 'info');
      }
    })
    .catch((err) => {
      console.error(err);
      Swal.fire('Error', err.message, 'error');
    });
};


  return (
    <div className="p-5  mx-auto">
      <h2 className="text-3xl font-bold mb-4 underline text-secondary">Update Profile</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="displayName"
          placeholder="Full Name"
          value={formData.displayName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          disabled
          className="border p-2 rounded bg-gray-100"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastEducation"
          placeholder="Last Education"
          value={formData.lastEducation}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={formData.experience}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          onClick={handleUpdate}
        //   className="bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600"
          className="btn-c"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
