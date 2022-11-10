import React from 'react';
import sign from '../../../img/signature.png'
import mon from '../../../img/mon.jpg'

const About = () => {
    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content w-10/12 m-auto flex-col lg:flex-row">
                <img className="mask mask-squircle h-80 w-80" alt='' src={mon} />
                <div className='ml-10'>
                    <h4 className="text-lg font-bold">ABOUT ME</h4>
                    <h1 className="text-5xl font-bold">MD ARAF</h1>
                    <p className="py-6">Essentially, the purpose of photography is to communicate and document moments in time. </p>
                    <p>When you take a photograph and share it with others, you're showing a moment that was frozen through a picture. This moment can tell someone many things, from the environment to what people are doing.</p>
                    <div className='w-28 h-20'>
                        <img className='text-left' src={sign} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;