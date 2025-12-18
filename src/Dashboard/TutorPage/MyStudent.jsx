import { useEffect, useMemo, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ChatLoading from "../../components/Loading/ChatLoading";



const MyStudent = () => {
    const { user } = useAuth();
    const [tutions, setTutions] = useState([]);
    const [students, setStudents] = useState([]);
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

 const tution = tutions.filter(     //this ia a not set   tutions is maping to day
    (student) => student.teacherEmail === user.email 
  ); 
 const email = useMemo(() => {
  return [
    ...new Set(
      tution
        .map(item => item.email)
        .filter(Boolean))
  ];
}, [tution]);

useEffect(() => {
  if (email.length === 0) return; // empty হলে skip

  const studentEmail = email[0]; // string
  const loadStudent = async () => {
    try {
      setLoading(true);
      const res = await axiosSecure.get(`/users/${studentEmail}`);
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadStudent();
}, [email[0]]); 


console.log("email", email);
 console.log("student", students);
 console.log("tution", tution);

    return (
        <div>
           <h2 className='text-2xl font-bold p-2 underline'>My Student</h2>
           <div>
             {/* Loading */}
                {loading && (
                    <div className="flex justify-center items-center min-h-40">
                    <ChatLoading />
                    </div>
                )}

                {/*  No Data Found */}
                {!loading && email.length === 0 && (
                    <div className="text-center text-gray-500 font-semibold py-10">
                     No payment history found
                    </div>
                )}
                {!loading && email.length > 0 && (
                    
                       
            <div className="grid  grid-cols-2 justify-center items-center">
                <img className="w-24 h-24 md:w-35 md:h-35 xl:w-42 xl:h-42 profile-img my-4 mx-auto" src={students.photoURL} alt="" />
                <div className="border-l-4 pl-4 border-secondary">
                    <h3 className="font-bold text-lg"><strong>Name: </strong> {students.displayName}</h3>
                    <p><strong>Email:</strong> {students.email}</p>
                    <p><strong>Phone:</strong> {students.phone}</p>                   
                    <p><strong>ID:</strong> {students.userId}</p>
                    <p><strong>Location: </strong> {students.district}</p>
                    <p><strong>Education Qulafiction</strong> {students.lastEducation}</p>
                </div>
            </div>
         
        
                
                    )}                
           </div>
        </div>
    );
};

;



export default MyStudent;