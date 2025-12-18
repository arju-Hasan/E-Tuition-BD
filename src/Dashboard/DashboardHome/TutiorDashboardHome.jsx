import React from 'react';
import img from '../../assets/Tuitior/group.png'
import TutorProfile from '../TutorPage/TutorProfile';
import JobPosted from '../TutorPage/JobPosted';
import Applayed from '../TutorPage/Applayed';

const TutiorDashboardHome = () => {
    return (
        <div className='bg-white'>
          <TutorProfile />
          
          <JobPosted />
          <Applayed />
            
        </div>
    );
};

export default TutiorDashboardHome;