import React, { useEffect, useState } from "react";
import tuition from '../../../assets/tuition1.webp'
import { GraduationCap, MapPin, Search } from "lucide-react";
import styled from 'styled-components';
import onlineImg from '../../../assets/online.png'


const Hero = () => {


  return (
    <>
    <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center">
        <div className="col-span-3 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-start p-4 ml-4">Best 
               
                <span className="text-secondary">
                Tutoring Platform
            </span>
            <br /> for Home & Online Tuitions</h2>
            <p className="text-xl md:text-3xl flex text-info justify-center md:justify-start items-center  pl-8 gap-2"> <MapPin /> Find the Right Tutor in Your Area</p>
            
            <button className="relative p-3 grid mx-auto items-start md:items-center rounded-full group mt-6 md:ml-15 shadow hover:shadow-primary hover:shadow-2xl">
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f15a24] to-[#004aad] opacity-0 group-hover:opacity-100 transition-opacity"></span>

            {/* Inner content with gradient background */}
            <span className="relative flex items-center gap-3  text-2xl p-3 rounded-full bg-gradient-to-r from-[#004aad] to-[#f15a24] text-white font-semibold">
                <GraduationCap /> FIND A TUTOR <Search />
            </span>
            </button>        
        </div>
        {/* <div className="col-span-3 md:col-span-2 order-1 md:order-2">
            <img className="col-span-1 p-10 animate-[float_3s_ease-in-out_infinite]" src={tuition} alt="tuition" />
        </div> */}
        <div className="col-span-3 md:col-span-2 order-1 md:order-2">
        <img
            className="w-full h-auto max-w-full p-10 animate-[float_3s_ease-in-out_infinite] object-contain"
            src={tuition}
            alt="tuition"
        />
        </div>

    </div>
    {/* SEARCH */}
    <div className="bg-base-200 rounded-3xl">
            <h2 className="text-center font-bold text-4xl pt-5">SEARCH TUTORING JOBS</h2>
            <p className="text-center font-semibold text-xl">Find Your Tution Jobs, in your area</p>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                <div className="col-span-1">
                    <img
                    src={onlineImg}
                    alt="teacher img"
                    className="w-full h-auto max-w-full p-10 object-contain"
                    style={{
                        animation: 'zoom 3s ease-in-out infinite',
                        transformOrigin: 'center',
                    }}
                    />
                </div>
                <div className="col-span-1">
                    <h3 className="text-bold text-black text-xl text-center">Looking for interesting tuition jobs to excel your <br /> teaching experience?</h3>
                    <p className="text-info p-4 text-center">If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.</p>
                    <StyledWrapper className="flex justify-center p-10">
                    <button className="shadow__btn">
                        uiverse
                    </button>
                    </StyledWrapper>
                </div>
            </div>
       
    </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
  }

  .shadow__btn {
    background: rgb(241, 90, 36);
    box-shadow: 0 0 25px rgb(241, 90, 36);
  }

  .shadow__btn:hover {
    box-shadow: 0 0 5px rgb(241, 90, 36),
                0 0 25px rgb(241, 90, 36),
                0 0 50px rgb(241, 90, 36),
                0 0 100px rgb(241, 90, 36);
  }`;
export default Hero;


