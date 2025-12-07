import React from 'react';
import img from '../../assets/Tuitior/group.png'

const TutiorDashboardHome = () => {
    return (
        <div>
            <h2>Tutiors Dashboard Home</h2>
            <img
  src={img}
  alt="image"
  className="profile-img mx-auto"
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