import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const Applayed = () => {
const { user, loading } = useAuth();
const axiosSecure = useAxiosSecure();
const navigate = useNavigate(); 
const [jobs, setJob] = useState(null);
// console.log(jobs); 
//  console.log(user);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axiosSecure.get('/tutions');
      setJob(res.data.data);     // or setJob(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, [axiosSecure]);

  const myJobs = jobs?.map(job => {
  const match = job.teachers?.find(jt => jt.email === user.email);
  return match ? job : null;
  }).filter(Boolean) || [];

const handelDetails = (id) =>{
    console.log("details id", id);
    navigate(`/tutions/${id}`);
}

return (    
    <div className='bg-white'>
        <div className="bg-base-100 border-2 border-primary m-5 rounded-2xl">        
            <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary p-4'> <span 
            className='text-primary font-extrabold'>M</span>y <span 
            className='text-primary font-extrabold'>A</span>pplied <span 
            className='text-primary font-extrabold'>T</span>o <span
            className='text-primary font-extrabold'>J</span>ob  <span
            className='text-primary font-extrabold'>P</span>ost 
            </h2>               
            <div>
                <div>
                    {
                    myJobs.map(job => (
                    <div className='border-2 border-secondary hover:border-primary rounded-2xl bg-white grid grid-cols-2 md:grid-cols-3 gap-5 m-10 p-5 shadow-xl hover:shadow-primary shadow-secondary' key={job._id}>
                        <div className='col-span-2 md:col-span-1 mx-auto'>
                            <img className='w-20 h-20 rounded-full mx-auto' src={job.photoURL} alt="" />
                            <h2 className='text-center font-bold mt-2'>Student Photo</h2>
                        </div>
                        <div className='col-span-2 grid grid-cols-2 md:grid-cols-3 font-semibold'>
                        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2'>
                            <div className='grid justify-center items-center'>
                                <h2>Student Name: {job.name}</h2>
                                <h2>Email:{job.email}</h2>                            
                            </div>
                            <div className='grid justify-center items-center'>
                                <h2>Phone: {job.phone}</h2>
                                <h2>Salary: <span className="text-secondary">{job.salary} TK</span> </h2>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-1 grid justify-center gap-2'>
                            <button onClick={() => handelDetails(job._id)} className='btn-c btn-c-sm'>View</button>
                            <button className='btn-c btn-c-sm'>Delete</button>
                        </div>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Applayed;    