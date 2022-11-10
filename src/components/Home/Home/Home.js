import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;