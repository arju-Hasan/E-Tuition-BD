import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapPin } from 'lucide-react';
import { faCertificate } from "@fortawesome/free-solid-svg-icons";



const TutorsCard = () => {
    return (
        <div className='grid grid-cols-4 gap-0'>
         <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
             <figure className="px-0 pt-5">
                 <img
                 src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
                 <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
                 <span className='text-info text-md'>University of Chittagong</span>
                 <p className='text-xl'>Deperment Of Chemistry</p>
                 <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
                 <div className="card-actions w-full">
                 <button className="btn-c w-full">View Details</button>
                 </div>
             </div>
         </div>

         {/* =================== */}
         <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
             <figure className="px-0 pt-5">
                 <img
                 src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
                 <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
                 <span className='text-info text-md'>University of Chittagong</span>
                 <p className='text-xl'>Deperment Of Chemistry</p>
                 <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
                 <div className="card-actions w-full">
                 <button className="btn-c w-full">View Details</button>
                 </div>
             </div>
         </div>
         <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
             <figure className="px-0 pt-5">
                 <img
                 src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
                 <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
                 <span className='text-info text-md'>University of Chittagong</span>
                 <p className='text-xl'>Deperment Of Chemistry</p>
                 <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
                 <div className="card-actions w-full">
                 <button className="btn-c w-full">View Details</button>
                 </div>
             </div>
         </div>
         <div className="card bg-white w-max-96 shadow-md hover:shadow-xl shadow-primary m-2">
             <figure className="px-0 pt-5">
                 <img
                 src="https://i.ibb.co.com/8g1ScGQC/demo-app-2.webp"
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
                 <h2 className="card-title text-xl">Arju Hasan Raju <FontAwesomeIcon  className='text-green-600' icon={faCertificate} /></h2>
                 <span className='text-info text-md'>University of Chittagong</span>
                 <p className='text-xl'>Deperment Of Chemistry</p>
                 <span className='flex justify-center items-center gap-2 text-[18px]  font-bold'><MapPin /> Dhaka</span>
                 <div className="card-actions w-full">
                 <button className="btn-c w-full">View Details</button>
                 </div>
             </div>
         </div>
        
         {/* ================ */}
        </div>
    );
};

export default TutorsCard;