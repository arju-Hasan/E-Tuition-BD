import React from 'react';
import img from '../../assets/Tuitior/group.png'
import TutorProfile from '../TutorPage/TutorProfile';
import JobPosted from '../TutorPage/JobPosted';

const TutiorDashboardHome = () => {
    return (
        <div>
          <TutorProfile />
          <JobPosted />
            {/* <h2>Tutiors Dashboard Home</h2> */}
            <img
  src={img}
  alt="image"
  className="profile-img mx-auto" // profile-img this is a class
  style={{
    width: "380px",
    height: "390px",
    objectFit: "cover",
    marginTop: "30px"
  }}
/>
        </div>
    );
};

export default TutiorDashboardHome;