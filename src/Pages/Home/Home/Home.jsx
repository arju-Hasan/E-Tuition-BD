import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Hero/Hero';
import Container from '../../../Components/Container';
import PopularTutors from '../PopularTutors/PopularTutors';
import LiveCount from '../LiveCount/LiveCount';
import ReviewUs from '../ReviewUs/ReviewUs';
import HowWorks from '../HowWorks/HowWorks';
import Tution from '../Tutions/Tution';

const Home = () => {
    return (
        <div>
            <Container>
              <Hero />  
              <PopularTutors />
              <Tution />
              <LiveCount />
              <ReviewUs />
              <HowWorks/>

            </Container>           
        </div>
    );
};

export default Home;