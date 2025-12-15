import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaMosque, FaSackDollar } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { BookOpen, School } from "lucide-react";
import { PiTimerBold } from "react-icons/pi";import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const UserDashboardHome = () => {
    const { user, logOut, loading } = useAuth();
    const [tutions, setTutions] = useState([]);
    const navigate = useNavigate();  
    const axiosSecure =useAxiosSecure();

    const [userData, setUserData] = useState(null); //db user data
    
    useEffect(() => {
        if (user?.email) {
          axiosSecure
            .get(`/users/${user.email}`)
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
        }
      }, [user?.email]);

  useEffect(() => {
    const loadTutions = async () => {
      const res = await axiosSecure.get("/tutions");
      setTutions(res.data.data);
    };
    loadTutions();
  }, []);
 
 const tution = tutions.filter(     //this ia a not set   tutions is maping to day
    (student) => student.email === user.email || student.status === userData?.email
  ); 

const handelDetails = (id) =>{
 console.log("details id", id);
 navigate(`/tutions/${id}`);
}


    return (
        <div>
           <div>
            <h2 className='text-2xl font-bold p-2 underline'>Activity Status :</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-bold'>
                <div className='p-4 border m-2 shadow shadow-2xl shadow-secondary  rounded-2xl bg-base-200 flex flex-col items-center'>
                    <h2 className='text-xl'>Panding Post</h2>
                    <p className='text-4xl '>{tution.filter(t => t.status === 'pending').length}</p>
                    <span>Verification processing</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl shadow-secondary rounded-2xl bg-green-200 flex flex-col items-center'>
                    <h2 className='text-xl'>Posted in job board</h2>
                    <p className='text-4xl '>{tution.filter(t => t.status === 'approved').length}</p>
                    <span>Posted in job board</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl shadow-secondary rounded-2xl bg-green-300 flex flex-col items-center'>
                    <h2 className='text-xl'>Patment</h2>
                    <p className='text-4xl '>{tution.filter(t => t.payment === 'paid').length}</p>
                    <span>Your payment Suceess</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl shadow-secondary rounded-2xl bg-green-400 flex flex-col items-center'>
                    <h2 className='text-xl'>Assigned</h2>
                    <p className='text-4xl '>0</p>
                    <span>Tutor has been assigned</span>
                </div>
                
            </div>
           </div>
             
        </div>
    );
};

export default UserDashboardHome;
// 
// <div className="grid gap-5 p-5">
//                 {tution.length === 0 && <p className="text-center text-xl font-bold my-10">No tutors found for your Post !</p>}
//                   {tution?.map((student) => (
//                         <div key={student._id} className="border p-4 rounded-xl shadow shadow-secondary hover:shadow-md">
//                             <div className="flex justify-between">
//                       <h2 className="text-2xl font-bold px-2">Student Name: {student.name} (<span className={`font-bold ${
//                             student.status === 'pending'
//                             ? 'text-red-500'
//                             : student.status === 'approved'
//                             ? 'text-green-600'
//                             : ''
//                             }`}>
//                             {student.status}
//                         </span>)
//                       </h2>
//                     <p className="flex justify-end items-center gap-2"><FaMapMarkerAlt /> {student.region}, {student.district}</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center w-full my-2">
//                       <img className="profile-img h-33 w-33 mx-auto" src={student.photoURL} alt="" />
//                     <div className="border-0 md:border-l-3 pl-0 md:pl-3 border-primary  grid gap-2">
//                         <p className="flex gap-2"><FaMosque /> Medium: {student.medium}</p>
//                         <p className="flex gap-2"><School />Student Class: {student.class}</p>
//                         <p className="flex gap-2"><FaRegCalendarAlt />Tutoring Days: {student.day} Day/Week</p>
//                     </div>                            
//                     <div className="border-0 md:border-l-3 pl-0 md:pl-3 border-primary grid gap-2">
//                         <p className="flex gap-2"><BookOpen /> Subject: {student.subjact}</p>
//                         <p className="flex gap-2"><FaChalkboardTeacher /> Preferred Tutor: {student.TeacherGender}</p>
//                         <p className="flex gap-2"><FaSackDollar />Salary/Manth : <span className="text-secondary">{student.salary} TK</span> </p>
//                     </div>
//                             </div>
//                             <div className="flex justify-between items-center">
//                               <p className="flex gap-2 items-center"><PiTimerBold /> Post Time:  {new Date(student.createdAt).toLocaleString("en-US", {
//                                 day: "2-digit",
//                                 month: "long",
//                                 year: "numeric",
//                                 hour: "2-digit",
//                                 minute: "2-digit",
//                                 })}<span
//                                     className={`font-bold ${
//                                     student.payment === 'paid'
//                                         ? 'bg-green-600 text-white px-2 py-1 rounded'
//                                         : 'text-primary'
//                                     }`}
//                                 >
//                                     {student.payment}
//                                 </span>
//                                 </p>
//                                 <NavLink onClick={() => handelDetails(student._id)} className="btn-c btn-c-sm">See Details</NavLink>
//                             </div>
//                         </div>
//                   ))}
//             </div>