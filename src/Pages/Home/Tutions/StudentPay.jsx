import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useLocation} from "react-router";
import Loader from "../../../components/Loading/Loading";
import Container from "../../../Components/Container";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";

const StudentPay = () => {
    const { state } = useLocation();
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [tution, setTution] = useState(state.tution || null);
    const AxiosSecure = useAxiosSecure();   
    console.log("tution", tution.email);


    const openTeacherModal = async (email) => {
    try {
        // const res = await AxiosSecure.get(`/users/${email}`);
        const res = await AxiosSecure.delete(`/tutions/${tution._id}/teacher`, {
  params: { email: "user@gmail.com" }
});
        setSelectedTeacher(res.data); // user info save
        document.getElementById("teacherModal").showModal();
    } catch (error) {
        console.error(error);
    }
}; 

const handleTeacherDelete = async (teacherEmail) => {
  try {
    const confirmDelete = window.confirm("Are you sure you want to remove this teacher?");
    if (!confirmDelete) return;

    const res = await AxiosSecure.delete(`/tutions/${tution._id}/teacher`, {
      params: { email: teacherEmail }
    });

    if (res.data.success) {
      alert("Teacher removed successfully");
      // Update local state so UI updates without reload
      const updatedTeachers = tution.teachers.filter(t => t.email !== teacherEmail);
      setTution(prev => ({ ...prev, teachers: updatedTeachers }));
    }
  } catch (error) {
    console.error(error);
    alert("Failed to remove teacher");
  }
};





    return (
        <div>
            <Container>
             <h2>My Post Applaied Teacher:( {tution.teachers?.length})</h2>
            <div className="overflow-x-auto mb-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Teacher Photos</th>
                            <th>Teacher Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Teacher ID</th>
                            <th>My Buddget</th>                                                       
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tution.teachers?.map((teacher, index) => <tr key={teacher._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-10 h-10 rounded-xl" src={teacher.photoURL} alt="" /></td>
                                <td className="font-bold">{teacher.name}</td>
                                <td >{teacher.email}</td>
                                <td >{teacher.phone}</td>
                                <td >{teacher.teacherId}</td>
                                <td > <span className="font-bold text-secondary">{tution?.salary}</span> TK</td>
                                <td>
                                    {
                                        tution?.payment === 'paid' ?
                                            <span className='btn btn-square bg-green-800'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(teacher)} className="btn btn-square hover:bg-primary">Pay</button>
                                    }
                                    <button onClick={() => openTeacherModal(teacher.email)}    className='btn text-2xl btn-square hover:bg-primary mx-2'>    <BiSolidUserDetail />
                                    </button>
                                    <button
                                        onClick={() =>handleTeacherDelete(teacher.email)}
                                        className='btn btn-square hover:bg-primary'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody> 
                </table>
            </div>
            </Container>
            
                <dialog id="teacherModal" className="modal ">
    <div className="modal-box">
        {
            selectedTeacher ? ( 
            <div className="grid  grid-cols-2 justify-center items-center">
                <img className="w-24 h-24 md:w-35 md:h-35 xl:w-42 xl:h-42 profile-img my-4" src={selectedTeacher.photoURL} alt="" />
                <div className="border-l-4 pl-4 border-secondary">
                    <h3 className="font-bold text-lg"><strong>Name: </strong> {selectedTeacher.displayName}</h3>
                    <p><strong>Email:</strong> {selectedTeacher.email}</p>
                    <p><strong>Phone:</strong> {selectedTeacher.Phone}</p>                   
                    <p><strong>ID:</strong> {selectedTeacher.userId}</p>
                    <p><strong>Location: </strong> {selectedTeacher.district}</p>
                    <p><strong>Education Qulafiction</strong> {selectedTeacher.lastEducation}</p>
                </div>
            </div>
                
            ) : (
                <Loader />
            )
        }

        <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
        </div>
    </div>
</dialog>

        </div>
    );
};

export default StudentPay;

// 
// <div className="p-6">
//             <h1 className="text-2xl font-bold">Teacher Payment Portal</h1>
// 
//             {userInfo ? (
//                 <div className="mt-4 p-4 bg-gray-100 rounded border">
//                     <p><strong>Name:</strong> {userInfo.displayName}</p>
//                     <p><strong>Email:</strong> {userInfo.email}</p>
//                     <p><strong>Role:</strong> {userInfo.role}</p>
//                     <p><strong>Salary:</strong> {} ৳</p>
//                     
//                     
// 
//                     {/* এখানেই payment করা যাবে */}
//                 </div>
//             ) : (
//                 <Loader />
//             )}
//         </div>