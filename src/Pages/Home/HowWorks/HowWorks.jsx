import { UserPlus, Inbox, Layers, DollarSign } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { ImBook } from "react-icons/im";

import img1 from '../../../assets/brands/amazon.png'
import img2 from '../../../assets/brands/amazon_vector.png'
import img3 from '../../../assets/brands/casio.png'
import img4 from '../../../assets/brands/moonstar.png'
import img5 from '../../../assets/brands/randstad.png'
import img6 from '../../../assets/brands/star.png'
import img7 from '../../../assets/brands/start_people.png'




const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "CREATE TUTOR PROFILE",
      desc: "Create your profile in minutes with sign up information.",
      icon: <UserPlus className="text-white w-6 h-6" />,
      reverse: false,
    },
    {
      id: 2,
      title: "APPLY FOR JOBS",
      desc: "After completing your profile, browse our latest tuition jobs and apply.",
      icon: <Layers className="text-white w-6 h-6" />,
      reverse: true,
    },
    {
      id: 3,
      title: "GET FREE TUTORING JOB ALERT",
      desc: "Get tutoring job alerts via SMS/CALL whenever new jobs are posted.",
      icon: <Inbox className="text-white w-6 h-6" />,
      reverse: false,
    },
    {
      id: 4,
      title: "START TUTORING AND GROW YOUR INCOME",
      desc: "If parents like the demo session, you can continue tuition and start earning.",
      icon: <DollarSign className="text-white w-6 h-6" />,
      reverse: true,
    },
  ];

    // const subjects = ["Bangla", "English", "Math", "ICT", 'BIOLOGY',"PHYSICS", "Chemistry", "CSE", "EEE"];
    const subjects =[ img1, img2, img3, img4, img5, img6, img7]
  return (
    <div className="mt-20">
      {/* Heading */}
     <div className="">        
        <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span 
            className='text-primary font-extrabold'>H</span>ow <span 
            className='text-primary font-extrabold'>I</span>t <span 
            className='text-primary font-extrabold'>W</span>orks
            </h2>               
        <p className='text-center text-info md:text-xl p-2'>Here's how it works for Tutors</p>
    </div>

      {/* Steps */}
      <div className="mt-10 space-y-10 px-4 md:px-10 p-10 w-7/8 mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative flex items-center justify-between gap-5`}
          >
            {/* Left Circle Step Number */}
             {!step.reverse && (
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-xl">
                {step.id}
              </div>
            )}

            {/* Card */}
            <div
              className={`flex-1 bg-white shadow-lg rounded-xl flex overflow-hidden 
                ${step.reverse ? "flex-row-reverse" : ""}`}
            >
              {/* Icon Box */}
              <div className="w-24 bg-secondary flex items-center justify-center">
                {step.icon}
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className={`text-purple-700 ${step.reverse ? "text-end" : ""} font-bold text-lg`}>
                  {step.title} 
                </h3>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </div>
            </div>

            {/* Right Number Circle */}
            {step.reverse && (
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-xl">
                {step.id}
              </div>
            )}
          </div>
        ))}
      </div>

        {/*  */}
        <div className="my-10">        
            <h2 className='text-2xl md:text-4xl font-bold pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span 
            className='text-primary font-extrabold'>W</span>e <span 
            className='text-primary font-extrabold'>W</span>ere <span 
            className='text-primary font-extrabold'>F</span>eatured <span 
            className='text-primary font-extrabold'>O</span>n :-
            </h2>                 
        </div>
        {/* swiper */}
        <div className='pt-5'>        
            <Swiper
              slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        speed={4200}                 
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
            <div className=" flex items-center justify-center">
                <img src={sub} alt="brand logo" className="h-16 w-auto object-contain" />
            </div>
            </SwiperSlide>
            ))}
            </Swiper>
        
        </div>


    </div>
  );
};

export default HowItWorks;

// We were featured on: