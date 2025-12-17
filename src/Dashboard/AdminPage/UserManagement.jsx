import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { NavLink } from 'react-router';
import { BiSolidUserDetail } from 'react-icons/bi';
import { FcApproval } from 'react-icons/fc';
import Swal from "sweetalert2";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import ChatLoading from '../../components/Loading/ChatLoading';

const UserManagement = () => {
        const [tutions, setTutions] = useState([]);
        const axiosSecure =useAxiosSecure();
        const [loading, setLoading] = useState(true);

    
    useEffect(() => {
    const loadTutions = async () => {
        try {
        setLoading(true);
        const res = await axiosSecure.get("/tutions");
        setTutions(res.data.data);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
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
        <div className="pb-10">
            <div>
                <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary pb-4'>
                <span             
                className='text-primary font-extrabold'>U</span>ser <span 
                className='text-primary font-extrabold'>P</span>ayment <span 
                className='text-primary font-extrabold'>H</span>istory 
                </h2>
                
                <div>
                <div>
                {/* Loading */}
                {loading && (
                    <div className="flex justify-center items-center min-h-40">
                    <ChatLoading />
                    </div>
                )}

                {/*  No Data Found */}
                {!loading && tution.length === 0 && (
                    <div className="text-center text-gray-500 font-semibold py-10">
                     No payment history found
                    </div>
                )}
                {!loading && tution.length > 0 && (
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
                                    {student.status === 'assigned' ? (
                                        <NavLink  className="text-2xl bg-secondary btn btn-square">
                                        <FcApproval />
                                    </NavLink>
                                    ) : (
                                    <NavLink onClick={() => handelApproved(student)} className="text-2xl hover:bg-primary btn btn-square">
                                        <AiOutlineUsergroupAdd />
                                    </NavLink>  )}                                 
                                   
                                </td>
                            </tr>)
                        }

                    </tbody> 
                </table>)}
            </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;