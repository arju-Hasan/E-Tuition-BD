import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaChalkboardTeacher, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion"
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
      {tution?.map((student) => (
            <div key={student._id} className="border p-4 rounded-xl shadow shadow-secondary hover:shadow-md">
                <div className="flex justify-between">
          <h2 className="text-2xl font-bold px-2">Student Name: {student.name}</h2>
        <p className="flex justify-end items-center gap-2"><FaMapMarkerAlt /> {student.region}, {student.district}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center w-full my-2">

        <motion.div          
                    animate={{ rotate: 360 }}            
                     whileHover={{ rotate: 1, scale: 1.10 }} 
                     transition={{ duration: 0.5 }}
                > 
          <img className="profile-img h-33 w-33 mx-auto" src={student.photoURL} alt="" />
          </motion.div>
        <div className="border-0 md:border-l-3 pl-0 md:pl-3 border-primary  grid gap-2">
            <p className="flex gap-2"><FaMosque /> Medium: {student.medium}</p>
            <p className="flex gap-2"><School />Student Class: {student.class}</p>
            <p className="flex gap-2"><FaRegCalendarAlt />Tutoring Days: {student.day} Day/Week</p>
        </div>                            
        <div className="border-0 md:border-l-3 pl-0 md:pl-3 border-primary grid gap-2">
            <p className="flex gap-2"><BookOpen /> Subject: {student.subjact}</p>
            <p className="flex gap-2"><FaChalkboardTeacher /> Preferred Tutor: {student.TeacherGender}</p>
            <p className="flex gap-2"><FaSackDollar />Salary/Manth : <span className="text-secondary">{student.salary} TK</span> </p>
        </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center"><PiTimerBold /> Post Time:  {new Date(student.createdAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    })}<span
                        className={`font-bold ${
                          student.payment === 'paid'
                            ? 'bg-green-600 text-white px-2 py-1 rounded'
                            : 'text-primary'
                        }`}
                      >
                        {student.payment}
                      </span></p>
                    <NavLink onClick={() => handelDetails(student._id)} className="btn-c btn-c-sm">See Details</NavLink>
                </div>
            </div>
      ))}
    </div>
  );
};



export default TutionCard;
