import { useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PostedRequest from "../UserPage/PostedRequest";
import UpdateProfile from "../UserPage/UpdateProfile";
import { GrView } from "react-icons/gr";
import { BiSolidUserDetail } from "react-icons/bi";




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
 console.log(tution);
const handelDetails = (id) =>{
 console.log("details id", id);
 navigate(`/tutions/${id}`);
}


    return (
        <div>
            <div className="p-4 mb-5">
                <h2 className='text-2xl font-bold p-2 underline'>Activity Status :</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-bold'>
                <div className='p-4 border m-2 shadow shadow-2xl  hover:shadow-primary hover:bg-secondary shadow-secondary  rounded-2xl hover:text-white bg-green-100 flex flex-col items-center'>
                    <h2 className='text-xl'>Panding Post</h2>
                    <p className='text-4xl '>{tution.filter(t => t.status === 'pending').length}</p>
                    <span>Verification processing</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl  hover:shadow-primary hover:bg-secondary shadow-secondary rounded-2xl hover:text-white bg-green-200 flex flex-col items-center'>
                    <h2 className='text-xl'>Posted in job board</h2>
                    <p className='text-4xl '>{tution.filter(t => t.status === 'approved').length}</p>
                    <span>Posted in job board</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl  hover:shadow-primary hover:bg-secondary shadow-secondary rounded-2xl hover:text-white bg-green-300 flex flex-col items-center'>
                    <h2 className='text-xl'>Payment</h2>
                    <p className='text-4xl '>{tution.filter(t => t.payment === 'paid').length}</p>
                    <span>Your payment Suceess</span>
                </div>
                <div className='p-4 border m-2 shadow shadow-2xl  hover:shadow-primary hover:bg-secondary shadow-secondary rounded-2xl hover:text-white bg-green-400 flex flex-col items-center'>
                    <h2 className='text-xl'>Assigned</h2>
                    <p className='text-4xl '>0</p>
                    <span>Tutor has been assigned</span>
                </div>
                
                </div>
            </div>
            {/* Payment History Table */}
        <div className="border m-5 p-5 bg-base-200 rounded-2xl">
            <h2 className="text-2xl font-bold p-2 underline p-4">Payment Histary</h2>
            <div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Teacher Name</th>
                            <th>Teacher Email</th>                         
                            <th>transactionId</th>
                            <th>Paied Amount</th>                                                     
                            <th>Status</th>                                                     
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tution?.filter(item => item.transactionId).map((teacher, index) => <tr key={teacher._id}>
                                <th>{index + 1}</th>
                                {teacher.teachers?.map((tch, i) => (
                                    <td key={i} className="font-bold">
                                    {tch.name}
                                </td>,<td><img className="w-12 h-12 rounded-t-4xl" src={tch.photoURL} alt="" /></td>                               
                                ))}                                
                                <td className="font-bold">{teacher.teacherEmail}</td>
                                <td >{teacher.transactionId}</td>
                                
                                
                                <td > <span className="font-bold text-secondary">{teacher?.salary}</span> TK</td>
                                <td >{teacher.payment}</td>
                                <td>
                                    <NavLink to='/dashboard/sPosted' className="text-2xl hover:bg-primary btn btn-square">
                                        <BiSolidUserDetail />
                                    </NavLink>                                    
                                   
                                </td>
                            </tr>)
                        }

                    </tbody> 
                </table>
            </div>
        </div>

            {/* Update Profile and Posted Request */}
             <div className="m-4 bg-base-300 p-4 rounded-4xl mb-15">
                <UpdateProfile />
             </div>
             <PostedRequest />
        </div>
    );
};

export default UserDashboardHome;
