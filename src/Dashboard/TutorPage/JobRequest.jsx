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
      type:""
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
        placeholder="your number"
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
        <legend className="fieldset-legend">Experience year</legend>
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
          className="select w-full"
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
          className="select w-full"
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