import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { ImBook } from "react-icons/im";
import { Autoplay, Pagination } from 'swiper/modules';

import { NavLink } from 'react-router';
import TutorsCard from '../../Tutors/TutorsCard';


const PopularTutors = () => {
     const subjects = ["Bangla", "English", "Math", "ICT", 'BIOLOGY',"PHYSICS", "Chemistry", "CSE", "EEE"];
    return (
        <div>
            {/* title */}
            <div>
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-5 text-secondary'>
                    <span className='text-primary font-extrabold'>O</span>ur <span className='text-primary font-extrabold'>P</span>opular <span className='text-primary font-extrabold'>T</span>utors
                    </h2>
                <div className='grid grid-cols-3 p-4 items-center'>
                    <p className='order-1'></p>
                    <p className='text-center text-info md:text-xl p-2 order-2'>Here are few of the Verified Teachers</p>
                    <NavLink to='/tutiors' className='order-3 pr-4 text-end btn-c btn-c-sm mx-auto '>View All</NavLink>
                </div>
                <div className='w-full'>
                    <TutorsCard></TutorsCard>
                </div>
            </div>
            {/* Subject Specialist*/}
            <div className='mt-10'>
                <div>
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-5 text-secondary'>
                    <span 
                    className='text-primary font-extrabold'>F</span>ind  <span 
                    className='text-primary font-extrabold'>Y</span>our  <span 
                    className='text-primary font-extrabold'>S</span>ubject  <span 
                    className='text-primary font-extrabold'>S</span>pecialist
                    </h2>               
                <p className='text-center text-info md:text-xl p-2'>Find Our Specialist to reach your dream goal</p>                             
            </div>
            {/* swiper subjact */}
        <div className='pt-4'>        
        <Swiper
           slidesPerView={3}
            spaceBetween={20}
            loop={true}                 
            autoplay={{                   
                delay: 3000,                
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
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
        </div>
    );
};

export default PopularTutors;
