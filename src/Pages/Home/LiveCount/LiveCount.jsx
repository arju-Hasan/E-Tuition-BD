import React from "react";
import bgImg from "../../../assets/bg-img/bg.jpg";
import homeT from '../../../assets/Tuitior/home-t.png'
import onlineT from '../../../assets/Tuitior/online.png'
import groupT from '../../../assets/Tuitior/group.png'
import { NavLink } from "react-router";
import { animate, motion, useMotionValue, useTransform, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"


const LiveCount = () => {
// function AnimationOnView() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (value) => Math.round(value))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true }) // triggers once when in view
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      const animation = animate(count, 5002, { duration: 5 })
      return () => animation.stop()
    }
  }, [inView, count])


  return (
    <>
    {/* live section */}
    <div className="relative my-10 h-40 font-extrabold overflow-hidden rounded-xl">
        <div
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>    

     <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 w-full h-full text-secondary">

        <div className="col-span-1 p-10 flex flex-col justify-center items-center ">
          <span className="flex text-3xl text-center ">
            <motion.pre ref={ref}>
                {rounded}
              </motion.pre>+
              </span>
          <p className="">Total Applied</p>
        </div>
        <div className="col-span-1 p-10 flex flex-col justify-center items-center">
          <span className="text-3xl text-center ">520+</span>
          <p className="">Total Tutors</p>
        </div>
        <div className="col-span-1 p-10 flex flex-col justify-center items-center">
          <span className="text-3xl text-center ">952+</span>
          <p className="">Total Live Tuition</p>
        </div>
        <div className="col-span-1 p-10 flex flex-col justify-center items-center">
          <span className="text-3xl text-center ">46+</span>
          <p className="">Success Rating</p>
        </div>
     </div>      
    </div>
    {/* Tuition Types */}
    <div className="">        
        <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
            <span 
            className='text-primary font-extrabold'>T</span>uition  <span 
            className='text-primary font-extrabold'>T</span>ype
            </h2>               
        <p className='text-center text-info md:text-xl p-2'>Find the Best Tuition Type wsuits you most</p>
    </div>
    <div className="m-5 grid grid-cols-1 md:grid-cols-3">
          {/* home-t */}
          <motion.div          
            animate={{ rotate: 360 }}            
             whileHover={{ rotate: 8, scale: 1.10 }} 
             transition={{ duration: 0.2 }}
        > 
        <div className="card bg-white w-max-96 shadow-md hover:shadow-xl hover:shadow-secondary shadow-primary m-2">
          <figure className="px-0 pt-5">
             <img
             src={homeT}
             alt="Shoes"
             className="rounded-xl h-70 w-full object-cover l" />
          </figure>
          <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
          <h2 className="card-title font-bold text-2xl">Home Tutors</h2>
          <span className='text-info text-md'>Looking for one-to-one classes?</span>
          <p className='text-xl'>It's a unique opportunity to learn in the <br /> home with your expected future in <br /> different categories everything is in favor of your need</p>            
          </div>
        </div></motion.div>
      
        {/* online t  */}
        <motion.div            
            animate={{ rotate: 360 }}           
             whileHover={{ rotate: 8, scale: 1.10 }} 
             transition={{ duration: 0.2 }}
        > 
        <div className="card bg-white w-max-96 shadow-md hover:shadow-xl hover:shadow-secondary shadow-primary m-2">
          <figure className="px-0 pt-5">
             <img
             src={onlineT}
             alt="Shoes"
             className="rounded-xl h-70 w-full object-cover l" />
          </figure>
          <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
          <h2 className="card-title font-bold text-2xl">Online Tutors</h2>
          <span className='text-info text-md'>Are you left with any doubts??</span>
          <p className='text-xl'>Connect with the best tutors from anywhere and take online classes by using different tools Make your life more easier with this process.</p>            
          </div>
        </div></motion.div>
        {/* Group t */} 
         <motion.div            
            animate={{ rotate: 360 }}           
             whileHover={{ rotate: 8, scale: 1.10 }} 
             transition={{ duration: 0.2 }}
        > 
        <div 
          className="card bg-white w-max-96 shadow-md hover:shadow-xl hover:shadow-secondary shadow-primary m-2">
          <figure className="px-0 pt-5">
             <img
             src={groupT}
             alt="Shoes"
             className="rounded-xl h-70 w-full object-cover l" />
          </figure>
          <div className="card-body bg-base-100 m-5 rounded-xl items-center text-center">
          <h2 className="card-title font-bold text-2xl">Group Tutors</h2>
          <span className='text-info text-md'>Need the Compititive & Effordable experience?</span>
          <p className='text-xl'>A group of students can full fill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!</p>            
          </div> 
        </div></motion.div>
    </div> 
    {/* Want to become Tutor  */}
    <div className="bg-gradient-to-r from-primary to-secondary hover:p-2 p-1 m-10 w-6/8 mx-auto rounded-2xl">
    <div className="h-50 grid grid-cols-3 items-center p-10  mx-auto rounded-2xl bg-white">
      <div className="flex flex-col justify-start items-center h-full">
        <span className="text-xl font-bold text-secondary">JOIN TO E-TUITION.BD</span>
        <h2 className="text-3xl font-extrabold">TUTORS</h2>
      </div>
      <div className=" mx-auto">
        <span className="text-secondary">Let's</span> Work Together<br />& <span className="text-secondary">Explore</span> Opportunities
      </div>
      <div className="h-full flex justify-center items-end">        
        <NavLink to='/dashboard' className='btn-c flex mx-auto justify-center'>Join Now</NavLink> 
      </div>
    </div>
    </div>
    </>

  );
};



export default LiveCount;
