import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm, useWatch } from 'react-hook-form';
import {  useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2';

const TutorRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || "",
      status: "pending",
    }
  });

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const region = useWatch({ control, name: 'region' });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    return regionDistricts.map(d => d.district);
  };

  const onSubmit = async (formData) => {
    
    console.log("Submitting:", formData);

    await axiosSecure.post("/tutors", formData)
    .then(res => {
      console.log('after saving Tutor', res.data);
      if (res.data?.data?.insertedId) {
      navigate('/dashboard/postedrequesr')
      Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tutor request added successfully!",
            showConfirmButton: false,
            timer: 3000
           });
          }
     })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-5 shadow rounded space-y-3"
    >
      {/* <h2 className="text-xl font-bold text-center">Tutor Request</h2> */}
      <div className="">        
        <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span             
            className='text-primary font-extrabold'>T</span>utor <span 
            className='text-primary font-extrabold'>r</span>equests 
            </h2>               
        <p className='text-center text-info md:text-xl p-2'>You make a tutor Request given valied info.</p>
    </div>

      {/* Name */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Name</legend>
      <input
        {...register("name", { required: true })}
        className="border p-2 w-full rounded"
        type="text"
        placeholder="Name"
      />
      </fieldset>

      {/* Email */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Email</legend>
      <input
        {...register("email", { required: true })}
        className="border p-2 w-full rounded"
        type="email"
        placeholder="abc@gmail.com"
      />
      </fieldset>

      {/* Phone */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Phone</legend>
      <input
        {...register("phone", { required: true })}
        className="border p-2 w-full rounded"
        type="number"
        placeholder="+8801721602904"
      />
      </fieldset>

      {/* Tutoring Day */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Tutoring Day</legend>
      <select
        {...register("day", { required: true })}
        className="border p-2 w-full rounded"
      >
        <option value="" disabled>Select Day/Week</option>
        <option value="1">1 Day</option>
        <option value="2">2 Day</option>
        <option value="3">3 Day</option>
        <option value="4">4 Day</option>
        <option value="5">5 Day</option>
        <option value="6">6 Day</option>
        <option value="7">7 Day</option>
      </select>
      </fieldset>

      {/* Salary */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Salary/Month</legend>
      <input
        {...register("salary", { required: true })}
        className="border p-2 w-full rounded"
        type="number"
        placeholder="3000"
      />
      </fieldset>

      {/* Tuition Type */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Tuition Type</legend>
      <select
        {...register("type", { required: true })}
        className="border p-2 w-full rounded"
      >
        <option value="" disabled>Select Type</option>
        <option value="home">Home Tuition</option>
        <option value="online">Online Tuition</option>
        <option value="group">Group Tuition</option>
      </select>
      </fieldset>

      {/* Experience */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Experience</legend>
      <input
        {...register("experience", { required: true })}
        className="border p-2 w-full rounded"
        placeholder="Experience (in years)"
      />
      </fieldset>

      {/* Region */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Region</legend>
        <select
          {...register("region", { required: true })}
          className="select"
          defaultValue=""
        >
          <option disabled value="">Pick a region</option>
          {regions.map((r, i) => (
            <option key={i} value={r}>{r}</option>
          ))}
        </select>
      </fieldset>

      {/* District */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">District</legend>
        <select
          {...register("district", { required: true })}
          className="select"
          defaultValue=""
        >
          <option disabled value="">Pick a district</option>

          {districtsByRegion(region).map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>
      </fieldset>

      {/* Hidden Fields */}
      <input type="hidden" {...register("photoURL")} />
      <input type="hidden" {...register("status")} />

      <button className="btn-c w-full">
        Tutors Request
      </button>
    </form>
  );
};

export default TutorRequest;



// import React, { useState } from "react";
// import axios from "axios";
// import useAuth from "../../Hooks/useAuth";
// import { useForm, useWatch } from 'react-hook-form';
// import { useLoaderData } from "react-router";
// 
// const TutorRequest = () => {
//   const {
//         register,
//         handleSubmit,
//         control,
//         // formState: { errors } 
//     } = useForm();
//   const { user } = useAuth();
// 
//   const [data, setData] = useState({
//     name: user?.displayName || "",
//     email: user?.email || "",
//     photoURL: user?.photoURL || "",
//     subject: "",
//     phone: "",
//     district: "",
//     experience: "",
//     day: "",
//     type: "",
//     status: "pending",
//   });
// 
//    const serviceCenters = useLoaderData();
//     const regionsDuplicate = serviceCenters.map(c => c.region);
//     const regions = [...new Set(regionsDuplicate)];    
//     // explore useMemo useCallback
//     const region = useWatch({ control, name: 'senderRegion' });
//     const districtsByRegion = (region) => {
//         const regionDistricts = serviceCenters.filter(c => c.region === region);
//         const districts = regionDistricts.map(d => d.district);
//         return districts;
//     }
// 
//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
// 
//   const handleJobSubmit = async (e) => {
//     e.preventDefault();
// 
//     console.log("Submitting:", data);
// 
//     await axios.post("/tutors", data);
//     alert("Tutor request sent!");
//   };
// 
//   return (
//     <form
//       onSubmit={handleSubmit(handleJobSubmit)}
//       className="mx-auto p-5 shadow rounded space-y-3"
//     >
//       <h2 className="text-xl font-bold text-center">Tutor Request</h2>
// 
//       {/* Default user name */}
//       <label className="pl-3 text-black font-semibold">Name</label>
//       <input name="name" type="text" required value={data.name} onChange={handleChange} placeholder="Name"  className="border p-2 w-full rounded"/>
// 
//       {/* email */}
//       <label className="pl-3 text-black font-semibold">Email</label>
//       <input name="email" type="email" required value={data.email} onChange={handleChange} placeholder="abc@gmail.com"  className="border p-2 w-full rounded"/>
// 
//       {/* Phone */}
//       <label className="pl-3 text-black font-semibold">Phone</label>
//       <input name="phone" type="number" required value={data.phone} onChange={handleChange} placeholder="+8801721602904"  className="border p-2 w-full rounded"/>
// 
//       {/* District Select */}
//       {/* <label className="pl-3 text-black font-semibold">District</label>
//       <select name="district" required value={data.district} onChange={handleChange}
//         className="border p-2 w-full rounded"
//        >
//         <option value="" disabled>Select District</option>
//         <option value="Dhaka">Dhaka</option>
//         <option value="Chattogram">Chattogram</option>
//         <option value="Khulna">Khulna</option>
//         <option value="Rajshahi">Rajshahi</option>
//         <option value="Barishal">Barishal</option>
//         <option value="Sylhet">Sylhet</option>
//         <option value="Rangpur">Rangpur</option>
//         <option value="Mymensingh">Mymensingh</option>
//       </select> */}
// 
//       {/*  Tutoring Days: */}
//       <label className="pl-3 text-black font-semibold">Tutoring Day</label>
//       <select name="day" required value={data.day} onChange={handleChange}
//         className="border p-2 w-full rounded"
//        >
//         <option value="" disabled>Select Day/Week</option>
//         <option value="1">1 Day</option>
//         <option value="2">2 Day</option>
//         <option value="3">3 Day</option>
//         <option value="4">4 Day</option>
//         <option value="5">5 Day</option>
//         <option value="6">6 Day</option>
//         <option value="7">7 Day</option>
//        
//       </select>
// 
//       {/*  Salary/month */}
//       <label className="pl-3 text-black font-semibold">Salary/Month</label>
//       <input name="salary" type="number" required value={data.salary} onChange={handleChange} placeholder="3000"  className="border p-2 w-full rounded"/>
// 
//       {/* Tuition Style */}
//         <label className="pl-3 text-black font-semibold">Tuition Type</label>
//       <select name="type" required value={data.type} onChange={handleChange}
//         className="border p-2 w-full rounded"
//        >
//         <option value="" disabled>Select Type</option>
//         <option value="home">Home Tuition</option>
//         <option value="online">Online Tuition</option>
//         <option value="group">Group Tuition</option>
//        
//       </select>
// 
//       {/* Experience */}
//       <label className="pl-3 text-black font-semibold">Experience</label>
//       <input name="experience" required value={data.experience} onChange={handleChange}
//         placeholder="Experience (in years)"
//         className="border p-2 w-full rounded"
//       />
// 
//          <input type="text" {...register('email')}
//             defaultValue={user?.email}
//               className="input w-full" placeholder=" Email" />
// 
// {/* ================== */}
//     {/*  region */}
//                         <fieldset className="fieldset">
//                             <legend className="fieldset-legend"> Regions</legend>
//                             <select {...register('Region')} defaultValue="Pick a region" className="select">
//                                 <option disabled={true}>Pick a region</option>
//                                 {
//                                     regions.map((r, i) => <option key={i} value={r}>{r}</option>)
//                                 }
//                             </select>
//                         </fieldset>
// 
//                         {/*  districts */}
//                         <fieldset className="fieldset">
//                             <legend className="fieldset-legend">Districts</legend>
//                             <select {...register('district')} defaultValue="Pick a district" className="select">
//                                 <option disabled={true}>Pick a district</option>
//                                 {
//                                     districtsByRegion(region).map((r, i) => <option key={i} value={r}>{r}</option>)
//                                 }
//                             </select>
//                         </fieldset>
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//       {/* Hidden fields */}
//       <input type="hidden" name="email" value={data.email} />
//       <input type="hidden" name="photoURL" value={data.photoURL} />
//       <input type="hidden" name="status" value="pending" />
// 
//       <button className="w-full bg-green-600 text-white p-2 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };
// 
// export default TutorRequest;
