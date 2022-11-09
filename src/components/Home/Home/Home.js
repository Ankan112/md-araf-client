import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <About></About>
        </div>
    );
};

export default Home;