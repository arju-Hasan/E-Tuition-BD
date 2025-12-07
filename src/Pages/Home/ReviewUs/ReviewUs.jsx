import React from 'react';
import { TfiPencilAlt } from "react-icons/tfi";
import parentImg from '../../../assets/Tuitior/online.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { ImBook } from "react-icons/im";
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router';
import TutorsCard from '../../Tutors/TutorsCard';



     

const ReviewUs = () => {

    const subjects = ["PLAY", "ONE", "TOW", "THREE", 'FOUR',"FIVE", "SIX", "SEVEN", "EIGHT", 'NINE', 'TEN', 'INTER 1st', 'INTER 2nd',];

    return (
        <div>
            <div className="">        
            <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary flex justify-center items-center'>
            <span 
            className='text-primary font-extrabold'>P</span>eople  <span 
            className='text-primary font-extrabold'>R</span>eview <span 
            className='text-primary font-extrabold'>u</span>s !! -<TfiPencilAlt className='text-2xl font-bold' />
            </h2>               
            <p className='text-center text-info md:text-xl p-2'>We are prod to share the experience of our honourable clients</p>
            </div>
            {/* body */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* parentes */}
            <div className="max-w-xl mx-auto bg-white p-8 my-8 rounded-2xl shadow-xl border border-gray-200 shadow-primary">
      
                {/* Title */}
                <h2 className="text-center text-2xl font-bold mb-6">
                    What our <span className="text-primary">Parents</span> say about us
                </h2>

                {/* Image Shape Wrapper */}
                <div className="mx-auto  p-[3px] rounded-full flex items-center justify-center">
                    <div>
                    <img
                        src={parentImg}
                        alt="parent"
                        className=" object-cover "
                    />
                    </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-xl font-bold mt-4">Sadia Naznin</h3>
                <p className="text-center text-gray-500 text-sm mb-4">
                    Mother to Grade 4 Student
                </p>

                {/* Review Text */}
                <p className="text-center text-gray-600 leading-relaxed px-2">
                    “Tutorsheba has many exceptional and dedicated tutors for my child.
                    Their tutor has learned my child very well. I am grateful for the
                    positive impact on my child's education to Tutorsheba and highly
                    recommend them to other parents.”
                </p>
            </div> 
        
            {/* Teacher */}
            <div className="max-w-xl mx-auto bg-white p-8 my-8 rounded-2xl shadow-xl border border-gray-200 shadow-primary">
      
                {/* Title */}
                <h2 className="text-center text-2xl font-bold mb-6">
                    What our <span className="text-primary">Parents</span> say about us
                </h2>

                {/* Image Shape Wrapper */}
                <div className="mx-auto  p-[3px] rounded-full flex items-center justify-center">
                    <div>
                    <img
                        src={parentImg}
                        alt="parent"
                        className=" object-cover "
                    />
                    </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-xl font-bold mt-4">Sadia Naznin</h3>
                <p className="text-center text-gray-500 text-sm mb-4">
                    Mother to Grade 4 Student
                </p>

                {/* Review Text */}
                <p className="text-center text-gray-600 leading-relaxed px-2">
                    “Tutorsheba has many exceptional and dedicated tutors for my child.
                    Their tutor has learned my child very well. I am grateful for the
                    positive impact on my child's education to Tutorsheba and highly
                    recommend them to other parents.”
                </p>
            </div>
        </div>   

         {/*  Our Services */}

        <div>
          <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
           <span className='text-primary font-extrabold'>O</span>ur <span className='text-primary font-extrabold'>S</span>ervices 
            </h2>
            <div className='grid grid-cols-3 p-4 items-center'>
             <p className='order-1'></p>
            <p className='text-center text-info md:text-xl p-2 order-2'>Here are services we provide</p>
             <NavLink to='/tutiors' className='order-3 pr-4 text-end btn-c btn-c-sm mx-auto '>View All</NavLink>
             </div>
            <div className='w-full'>
            </div>
        </div>
        {/* swiper */}
         <div className='pt-4'>        
        <Swiper
           slidesPerView={5}
            spaceBetween={20}
            loop={true}
            speed={2000}                 
            autoplay={{                   
                delay:0,                
                disableOnInteraction: false,                
            }}
            allowTouchMove={false}      // smooth continuous motion
            grabCursor={false}
            pagination={{ clickable: true }}
            modules={[ Autoplay]}
            className="mySwiper h-40"
            >
            {subjects.map((sub, index) => (
                <SwiperSlide key={index}>
                {/* Wrapper div inside slide */}
                <div className="swiper-s flex gap-4">
                    <ImBook className='text-secondary text-3xl' />{sub}
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>





        </div>
    );
};

export default ReviewUs;