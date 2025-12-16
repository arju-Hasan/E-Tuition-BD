import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { NavLink } from 'react-router';
import { BiSolidUserDetail } from 'react-icons/bi';
import { FcApproval } from 'react-icons/fc';
import Swal from "sweetalert2";

const UserManagement = () => {
        const [tutions, setTutions] = useState([]);
        const axiosSecure =useAxiosSecure();
        
      useEffect(() => {
        const loadTutions = async () => {
          const res = await axiosSecure.get("/tutions");
          setTutions(res.data.data);
        };
        loadTutions();
      }, []);
     
      const tution = tutions?.filter(
        student => student?.transactionId  ||   student?.payment === 'paid');



const handelApproved = async (student) => {
    console.log("handle click student data", student);
    if (student.status === "assigned") {
        Swal.fire({
            icon: "info",
            title: "Already Assigned",
            text: "This student is already assigned to a teacher.",
            confirmButtonColor: "#3085d6"
        });
        return;
    }
    try { const res = await fetch(`http://localhost:3000/tutions/${student._id}`,
            { method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    status: "assigned",
                    teacherEmail: student.teacherEmail
                })
            });  
        const data = await res.json();
        if (data.tutionModified > 0) {
            Swal.fire({
                icon: "success",
                title: "Approved!",
                text: "Student assigned & teacher activated successfully.",
                confirmButtonColor: "#16a34a"
            }).then(() => {
                window.location.reload();
                });
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please try again later."
        });
    }
};






    return (
        <div>
            <div>
                <h2 className='text-2xl text-center p-4 font-bold underline'>User Payment history</h2>
                <div>
    <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Teacher Name</th>
                            <th>Student Name</th>                         
                            <th>Student Phone</th>
                            <th>Paied Amount</th>                                                     
                            <th>Status</th>                                                     
                            <th>Assigned Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tution?.filter(item => item.transactionId).map((student, index) => <tr key={student._id}>
                                <th>{index + 1}</th>
                                {student.teachers?.map((tch, i) => (
                                    <td key={i} className="font-bold">
                                    {tch.name}
                                </td>                              
                                ))}                                
                                <td className="font-bold">{student.name}</td>
                                <td >{student.phone}</td>
                                
                                
                                <td > <span className="font-bold text-secondary">{student?.salary}</span> TK</td>
                                <td >{student.payment}</td>
                                <td className='flex gap-2'>
                                    <NavLink to='/dashboard' className="text-2xl hover:bg-primary btn btn-square">
                                        <BiSolidUserDetail />
                                    </NavLink>
                                    <NavLink onClick={() => handelApproved(student)} className="text-2xl hover:bg-primary btn btn-square">
                                        <FcApproval />
                                    </NavLink>                                   
                                   
                                </td>
                            </tr>)
                        }

                    </tbody> 
                </table>
            </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;