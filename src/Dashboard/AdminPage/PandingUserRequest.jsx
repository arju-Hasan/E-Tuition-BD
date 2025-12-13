import React from 'react';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import {  FaTrashCan } from 'react-icons/fa6';
import { MdPersonAddAlt1 } from 'react-icons/md';

const PandingUserRequest = () => {
      const { user } = useAuth();
        const axiosSecure = useAxiosSecure();
    
        const { data: result = [], refetch } = useQuery({
            queryKey: ['tutions', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/tutions`);
                return res.data;
            }
        })
        const tutions = result.data || [];
    console.log(tutions);
    console.log(user);
      const pending = tutions.filter(
    (tutor) => tutor.status === "pending" || tutor.status === "panding"
  ); console.log("pending", pending);

    const handleJoblDelete = id => {
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
              axiosSecure.delete(`/tutions/${id}`)
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
    const handleApprove  = (id, name) => {
        console.log("h app ",id);
        console.log("h app ",name);
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approved it!"
        }).then((result) => {
            if (result.isConfirmed) {
               axiosSecure.patch(`/tutions/${id}`, { status: "approved" })              
                  .then(res => {
                    console.log(res.data);
                      if (res.data.modifiedCount) {                            
                       refetch(); Swal.fire({ title: "Approved!",
                        text: "Tutor Request has been Approved.",
                        icon: "success"
               }); } })
            }
        });
    }



    return (
        <div>
            {/* hadding */}
            <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span             
            className='text-primary font-extrabold'>S</span>tudent <span 
            className='text-primary font-extrabold'>R</span>equests  <span 
            className='text-primary font-extrabold'>P</span>ending  
            ({pending.length})
            </h2>               
        <p className='text-center text-info md:text-xl p-2'>Your Can Request Update and Delete</p>

        {/* tutors body */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pending.map((tutor) => (
          <div key={tutor._id} className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold">{tutor.name}</h2>
          <p>{tutor.email}</p>
          <p>Status: {tutor.status}</p>
          </div>
          ))}        
          </div> 
        */}
        {
            pending.length === 0 ? (<p className='text-center p-20'>Pending is not found </p>):(
        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>                           
                            <th>Salary / Month</th>
                            <th>Location</th>                            
                            <th>status</th>                           
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pending.map((tutor, index) => <tr key={tutor._id}>
                                <th>{index + 1}</th>
                                <td>{tutor.name}</td>                                
                                <td>{tutor.salary} TK</td>
                                <td>{tutor.region}, {tutor.district}</td>
                                <td> <span className='text-white bg-secondary p-2 rounded-md'>{tutor.status}</span>        
                                </td>  
                                <td>                                    
                                    <button onClick={() => handleApprove(tutor._id, tutor.name)} className='btn btn-square hover:bg-primary mx-2'>
                                        <MdPersonAddAlt1 />
                                    </button>
                                    <button
                                        onClick={() => handleJoblDelete(tutor._id)}
                                        className='btn btn-square hover:bg-primary'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            )}
        </div>
    );
};


export default PandingUserRequest;