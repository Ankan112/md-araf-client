import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Review from '../../Review/Review';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
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
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;