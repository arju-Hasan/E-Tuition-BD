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
console.log(tutors);
console.log(user);

    const handleParcelDelete = id => {
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
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });
    }


  return (
    <div className=" mx-auto p-5 mt-2">
      <h2 className="text-2xl font-bold mb-5 text-center">My Tutor Requests ({tutors.length})</h2>

      {tutors.length === 0 && <p>No tutors found for your email.</p>}

      {tutors.map((t) => (
        <div key={t._id} className="mx-auto m-6">
            <div className="border p-6">
                <h2>Name: {t.name}</h2>
                <h2>Phone No: {t.phone}</h2>
                <h2>Email: {t.email}</h2>
                <h2>Salary/Week: {t.salary} TK</h2>
                <p>Location:{t.region},{t.district}</p>
                <p>Current Status for Tutor:<span className={`font-bold ${t.status === "pending" ? "text-red-600" : "text-green-600"}`}>{t.status}</span> </p>
            </div>
            <div>
                  <button className='btn btn-square hover:bg-primary'>
                          <FaMagnifyingGlass />
                      </button>
                      <button className='btn btn-square hover:bg-primary mx-2'>
                          <FiEdit></FiEdit>
                      </button>
                      <button
                          onClick={() => handleParcelDelete(t._id)}
                          className='btn btn-square hover:bg-primary'>
                          <FaTrashCan />
                      </button>
            </div>
        </div>
      ))}
      
    </div>
  );
};

export default JobPosted;
