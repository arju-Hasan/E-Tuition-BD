import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Hero/Hero';
import Container from '../../../Components/Container';
import PopularTutors from '../PopularTutors/PopularTutors';
import LiveCount from '../LiveCount/LiveCount';
import ReviewUs from '../ReviewUs/ReviewUs';
import HowWorks from '../HowWorks/HowWorks';

const Home = () => {
    return (
        <div>
            <Container>
              <Hero />  
              <PopularTutors />
              <LiveCount />
              <ReviewUs />
              <HowWorks/>

            </Container>           
        </div>
    );
};

export default Home;