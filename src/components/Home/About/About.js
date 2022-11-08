import React from 'react';
import sign from '../../../img/signature.png'

const About = () => {
    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content w-10/12 m-auto flex-col lg:flex-row">
                <img className="mask mask-squircle h-80 w-80" alt='' src="https://placeimg.com/160/160/arch" />
                <div className='ml-10'>
                    <h4 className="text-lg font-bold">ABOUT ME</h4>
                    <h1 className="text-5xl font-bold">MD ARAF</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias distinctio, minima atque accusamus vitae tenetur vel voluptate labore natus quasi eius placeat explicabo sunt quisquam tempora totam nulla voluptatem facilis est provident magni? Accusantium aperiam ut maxime repudiandae delectus!</p>
                    <div className='w-28 h-20'>
                        <img className='text-left' src={sign} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;