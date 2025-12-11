import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router";
import { FaMapMarkerAlt, FaChalkboardTeacher, FaRegCalendarAlt } from "react-icons/fa";
import { FaMosque, FaSackDollar } from "react-icons/fa6";
import { BookOpen, School } from "lucide-react";
import { PiTimerBold } from "react-icons/pi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../components/Loading/Loading";
import { toast } from "react-toastify";
import { BiSolidCommentAdd } from "react-icons/bi";
import Swal from "sweetalert2";

const TutionDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [tution, setTution] = useState(null);
  const { user, logOut, loading } = useAuth();
  const [userData, setUserData] = useState(null); //db user data
  
        useEffect(() => {
      if (user?.email) {
        axiosSecure
          .get(`/users/${user.email}`)
          .then(res => setUserData(res.data))
          .catch(err => console.log(err));
      }
    }, [user?.email]);
 
    // console.log("db user detales page", userData)
    // console.log("firebase user", user)

  useEffect(() => {
    const loadDetails = async () => {
      const res = await axiosSecure.get(`/tutions/${id}`);
      setTution(res.data.data);
    };
    loadDetails();
  }, [id]);

  console.log(tution);
  if (!tution) {
    // return <p className="text-center mt-10">Loading...</p>;
    return <p className="w-full h-grow "><Loader /></p>
  }


const handleChooseJob = async () => {
    if (userData?.role !== "tutor") {
      Swal.fire({
        title: "You are not a Teacher!",
        text: "You need to register as a tutor before you can apply.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Join Teacher",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await logOut();
          navigate("/register");
        }
      });
      return;
    } else(
      Swal.fire({
        title: `Are You sure ?`,
        text: `Will you do this job for ${tution.salary} Taka?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const teacherInfo = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL || "",
            appliedAt: new Date(),
            teacherId: user.userId,
    };
    try {
      const res = await axiosSecure.patch(`/tutions/apply/${tution._id}`, teacherInfo);

      Swal.fire({
        icon: "success",
        title: "Job Applied!",
        text: "You have successfully applied for this tution.",
      });
      navigate("/dashboard");
    }catch (error) {
    console.error(error);
     Swal.fire({
    icon: "error",
    title: "Failed!",
    text: "Something went wrong. Please try again.",
    });
    }
}}  
    )
)}
  
 

  return (
     <div>
        <div className="mb-0">        
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
                <span 
                className='text-primary font-extrabold'>S</span>tudents <span                
                className='text-primary font-extrabold'>D</span>etails
                </h2>               
            </div>
        <div className="m-10">
        <div key={tution._id} className="border p-4 rounded-xl shadow shadow-secondary hover:shadow-md">
        <h2 className="text-2xl font-bold px-2">Student Name: {tution.name}</h2>
        <p className="flex items-center"><FaMapMarkerAlt /> {tution.region}, {tution.district}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center w-full my-2">
        <div className="md:mx-auto grid gap-2">
            <p className="flex gap-2"><FaMosque /> Medium: {tution.medium}</p>
            <p className="flex gap-2"><School />Student Class: {tution.class}</p>
            <p className="flex gap-2"><FaRegCalendarAlt />Tutoring Days: {tution.day} Day/Week</p>
        </div>                            
        <div className="md:mx-auto grid gap-2">
            <p className="flex gap-2"><BookOpen /> Subject: {tution.subjact}</p>
            <p className="flex gap-2"><FaChalkboardTeacher /> Preferred Tutor: {tution.TeacherGender}</p>
            <p className="flex gap-2"><FaSackDollar />Salary/Manth : <span className="text-secondary">{tution.salary} TK</span> </p>
        </div>
        </div>
        <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center"><PiTimerBold /> Post Time:  {new Date(tution.createdAt).toLocaleString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            })}</p>
            <NavLink onClick={handleChooseJob} className="btn-c btn-c-sm"><span className="text-2xl">+ </span>Chose This Job</NavLink>                            
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
            <h2>Applyed Teacher :</h2>
            {tution.teachers?.map((teacher, index) => (
                <div key={index} className="w-8 h-8 rounded-full overflow-hidden border-2 border-secondary hover:border-primary">
                <img
                    src={teacher.photoURL}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                /> <p>+</p>
                </div> 
                
            ))} <p className="text-2xl">+</p>
        </div>
    </div>
   </div>
</div>   
);
};

export default TutionDetails;
