// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { MapPin } from 'lucide-react';
// import { faCertificate } from "@fortawesome/free-solid-svg-icons";
// 
// 
// 
// const TutorsCard = () => {
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0'>
//          <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
//              <figure className="px-0 pt-5">
//                  <img
//                  src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
//                  alt="Shoes"
//                  className="rounded-xl" />
//              </figure>
//              <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
//                  <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
//                  <span className='text-info text-md'>University of Chittagong</span>
//                  <p className='text-xl'>Deperment Of Chemistry</p>
//                  <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
//                  <div className="card-actions w-full">
//                  <button className="btn-c w-full">View Details</button>
//                  </div>
//              </div>
//          </div>
// 
//          {/* =================== */}
//          <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
//              <figure className="px-0 pt-5">
//                  <img
//                  src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
//                  alt="Shoes"
//                  className="rounded-xl" />
//              </figure>
//              <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
//                  <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
//                  <span className='text-info text-md'>University of Chittagong</span>
//                  <p className='text-xl'>Deperment Of Chemistry</p>
//                  <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
//                  <div className="card-actions w-full">
//                  <button className="btn-c w-full">View Details</button>
//                  </div>
//              </div>
//          </div>
//          <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
//              <figure className="px-0 pt-5">
//                  <img
//                  src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
//                  alt="Shoes"
//                  className="rounded-xl" />
//              </figure>
//              <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
//                  <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
//                  <span className='text-info text-md'>University of Chittagong</span>
//                  <p className='text-xl'>Deperment Of Chemistry</p>
//                  <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
//                  <div className="card-actions w-full">
//                  <button className="btn-c w-full">View Details</button>
//                  </div>
//              </div>
//          </div>
//          <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
//              <figure className="px-0 pt-5">
//                  <img
//                  src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
//                  alt="Shoes"
//                  className="rounded-xl" />
//              </figure>
//              <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
//                  <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
//                  <span className='text-info text-md'>University of Chittagong</span>
//                  <p className='text-xl'>Deperment Of Chemistry</p>
//                  <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
//                  <div className="card-actions w-full">
//                  <button className="btn-c w-full">View Details</button>
//                  </div>
//              </div>
//          </div>
//         
//          {/* ================ */}
//         </div>
//     );
// };
// 
// export default TutorsCard;


import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AllTutors = () => {
  const [tutors, setTutors] = useState([]);
  
  const axiosSecure =useAxiosSecure();

  useEffect(() => {
    const loadTutors = async () => {
      const res = await axiosSecure.get("/tutors");
      setTutors(res.data.data);
    };
    loadTutors();
  }, []);
//  console.log("after fatch daat", tutors);
 const tutorss = tutors.filter(
    (tutor) => tutor.status === "approved" || tutor.status === "approved"
  ); 
//   console.log("pending", tutorss);

 const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // শুধুমাত্র প্রথমবার ভিউতে এলে



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
      {tutorss?.map((tutor) => (
        <div
          key={tutor._id}
          className="bg-white shadow-xl rounded-xl p-4 hover:shadow-2xl transition"
        >
       {/* <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }} // fallback to visible
      transition={{
        duration: 3,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    > */}
      <motion.div
        whileHover={{ scale: 1.3, rotate: 0 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
             <img
            src={tutor.photoURL}
            // className="w-24 h-24 mx-auto rounded-full border-4 border-secondary"
            className="profile-img"
            alt=""
          /></motion.div>

          <h2 className="text-xl font-bold text-center mt-2">{tutor.name}</h2>
          <p className="text-center text-gray-500">{tutor.email}</p>

          <div className="mt-3 space-y-1 text-sm">
            <p><strong>Phone:</strong> {tutor.phone}</p>
            <p><strong>Status:</strong> {tutor.status}</p>
            <p><strong>Experience:</strong> {tutor.experience} years</p>
            <p><strong>Salary:</strong> {tutor.salary} BDT</p>
            <p><strong>Day:</strong> {tutor.day}</p>
            <p><strong>Type:</strong> {tutor.type}</p>
            <p><strong>Region:</strong> {tutor.region} → {tutor.district}</p>
          </div>

          <button className="btn-c w-full mt-4">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllTutors;
