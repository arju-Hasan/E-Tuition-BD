import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Hero/Hero';
import Container from '../../../Components/Container';

const Home = () => {
    return (
        <div>
            <Container>
              <Hero />  
            </Container>           
        </div>
    );
};

export default Home;