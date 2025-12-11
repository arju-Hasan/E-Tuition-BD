import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import { FiEdit } from 'react-icons/fi';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const JobPosted = () => {
   const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: result = [], refetch } = useQuery({
        queryKey: ['tutors', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutors/email?email=${user.email}`);
            return res.data;
        }
    })
    const tutors = result.data || [];
// console.log(tutors);
// console.log(user);

    const handleJobDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/tutors/${id}`)
                  .then(res => {
                    console.log(res.data);
                      if (res.data.deletedCount) {                            
                       refetch(); Swal.fire({ title: "Deleted!",
                        text: "Your Job request has been deleted.",
                        icon: "success"
               }); } })
            }
        });
    }


  return (
    <div className=" mx-auto p-5 bg-white">
      {/* <h2 className="text-2xl font-bold mb-5 text-center">My Tutor Requests ({tutors.length})</h2> */}
      <div className="">        
        <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span 
            className='text-primary font-extrabold'>M</span>y <span 
            className='text-primary font-extrabold'>T</span>utor <span 
            className='text-primary font-extrabold'>r</span>equests ({tutors.length})
            </h2>               
        <p className='text-center text-info md:text-xl p-2'>Your Can Request Update and Delete</p>
    </div>
      {tutors.length === 0 && <p>No tutors found for your email.</p>}

      {tutors.map((t) => (
        <div key={t._id} className="mx-auto m-6 border-primary p-6 border-2 mb-8 rounded-2xl shadow-secondary shadow-2xl grid justify-center md:justify-start">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-1 ">
              <img className="h-40 w-40 rounded-2xl mx-auto" src={t.photoURL} alt="" />
              <div>
                <h2 className="text-xl font-bold">Name: {t.name}</h2>
                <h2 className="text-xl font-bold">Phone No: {t.phone}</h2>
                <h2 className="text-xl font-bold">Email: {t.email}</h2>
                <h2 className="text-xl font-bold">Salary/Week: <span className="text-secondary">{t.salary}</span> TK</h2>
                <p className="text-xl font-bold">Location:{t.region},{t.district}</p>
                <p className="text-xl font-bold">Current Status for Tutor:<span className={`font-bold ${t.status === "pending" ? "text-primary" : "text-secondary"}`}>{t.status}</span> </p>
                </div>            
              <div className="flex gap-4 md:flex-col items-center justify-center">
                  <button className='btn-c hover:bg-primary'>
                  <FaMagnifyingGlass />
                  </button>
                  <button className='btn-c hover:bg-primary'>
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleJobDelete(t._id)}
                    className='btn-c hover:bg-primary'>
                    <FaTrashCan />
                  </button>
              </div>
            </div>
        </div>
      ))}
      
    </div>
  );
};

export default JobPosted;
