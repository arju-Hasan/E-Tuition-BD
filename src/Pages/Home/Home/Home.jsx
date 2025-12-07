import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Hero/Hero';
import Container from '../../../Components/Container';
import PopularTutors from '../PopularTutors/PopularTutors';

const Home = () => {
    return (
        <div>
            <Container>
              <Hero />  
              <PopularTutors />
            </Container>           
        </div>
    );
};

export default Home;