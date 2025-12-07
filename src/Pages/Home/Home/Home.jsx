import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Hero/Hero';
import Container from '../../../Components/Container';
import PopularTutors from '../PopularTutors/PopularTutors';
import LiveCount from '../LiveCount/LiveCount';

const Home = () => {
    return (
        <div>
            <Container>
              <Hero />  
              <PopularTutors />
              <LiveCount />
            </Container>           
        </div>
    );
};

export default Home;