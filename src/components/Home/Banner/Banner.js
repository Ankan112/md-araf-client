import React from 'react';
// import banner from '../../../img/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerImg '>
            {/* <img src={banner} alt="" /> */}
            <div className='lg:w-10/12 text-center font-bold lg:text-left pt-48 lg:pl-28'>
                <div>
                    <h1 className="text-7xl text-white">Hello, <br />I'm Md Araf.</h1>
                    <h6 className="text-lg text-white">PHOTOGRAPHER, TRAVELER</h6>
                </div>
            </div>
        </div>
    );
};

export default Banner;