import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaChalkboardTeacher, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaMosque, FaSackDollar } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { BookOpen, School } from "lucide-react";
import { PiTimerBold } from "react-icons/pi";



const TutionCard = () => {
  const [tutions, setTutions] = useState([]);
   const navigate = useNavigate();  
  const axiosSecure =useAxiosSecure();

  useEffect(() => {
    const loadTutions = async () => {
      const res = await axiosSecure.get("/tutions");
      setTutions(res.data.data);
    };
    loadTutions();
  }, []);
 
 const tution = tutions.filter(     //this ia a not set   tutions is maping to day
    (student) => student.status === "approved" || student.status === "approved"
  ); 
    console.log("after fatch daat", tutions);
    console.log("pending", tution);

const handelDetails = (id) =>{
 console.log("details id", id);
 navigate(`/tutions/${id}`);
}


  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
    <div className="grid gap-5 p-5">
      {tutions?.map((student) => (
//         <div
//           key={student._id}
//           className="bg-white shadow-xl rounded-xl p-4 hover:shadow-2xl transition"
//           >
//           <img
//             src={student.photoURL}
//             // className="w-24 h-24 mx-auto rounded-full border-4 border-secondary"
//             className="profile-img w-7/8 mx-auto"
//             alt=""
//           />
// 
//           <h2 className="text-xl font-bold text-center mt-2">{student.name}</h2>
//           <p className="text-center text-gray-500">{student.email}</p>
// 
//           <div className="mt-3 space-y-1 text-sm">
//             <p><strong>Phone:</strong> {student.phone}</p>
//             <p><strong>Status:</strong> {student.status}</p>
//             <p><strong>Experience:</strong> {student.experience} years</p>
//             <p><strong>Salary:</strong> {student.salary} BDT</p>
//             <p><strong>Day:</strong> {student.day}</p>
//             <p><strong>Type:</strong> {student.type}</p>
//             <p><strong>Region:</strong> {student.region} → {student.district}</p>
//           </div>
// 
//           <button className="btn-c w-full mt-4">
//             View Details
//           </button>
//         </div>
            <div key={student._id} className="border p-4 rounded-xl shadow shadow-secondary hover:shadow-md">
                <h2 className="text-2xl font-bold px-2">Student Name: {student.name}</h2>
                <p className="flex items-center"><FaMapMarkerAlt /> {student.region}, {student.district}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center w-full my-2">
                    <div className="md:mx-auto grid gap-2">
                        <p className="flex gap-2"><FaMosque /> Medium: {student.medium}</p>
                        <p className="flex gap-2"><School />Student Class: {student.class}</p>
                    </div>
                    <div className="md:mx-auto grid gap-2">
                        <p className="flex gap-2"><FaRegCalendarAlt />Tutoring Days: {student.day} Day/Week</p>
                        <p className="flex gap-2"><BookOpen /> Subject: {student.subjact}</p>
                    </div>
                    <div className="md:mx-auto grid gap-2">
                        <p className="flex gap-2"><FaChalkboardTeacher /> Preferred Tutor: {student.TeacherGender}</p>
                        <p className="flex gap-2"><FaSackDollar />Salary/Manth : <span className="text-secondary">{student.salary} TK</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center"><PiTimerBold /> Post Time:  {new Date(student.createdAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    })}</p>
                    <NavLink onClick={() => handelDetails(student._id)} className="btn-c btn-c-sm">See Details</NavLink>
                </div>
            </div>
      ))}
    </div>
  );
};



export default TutionCard;
