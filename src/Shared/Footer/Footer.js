import React from 'react';

const Footer = () => {
    return (
        <div className='bg-zinc-500 py-10'>
            <div className='w-10/12 m-auto text-white'>
                <h3 className='text-lg'>Follow Me</h3>
                <div className='flex-cols lg:flex font-bold'>
                    <h2 className="text-2xl mr-9">facebook</h2>
                    <h2 className="text-2xl mr-9">instagram</h2>
                    <h2 className="text-2xl mr-9">twitter</h2>
                </div>
                <h1 className='text-2xl mt-10'>Always Creative Ideas</h1>
                <h1 className='text-2xl font-bold'>To orders, call the 01823492341</h1>
                <p className='text-sm mt-10'>All Rights Reserved &copy; Md Araf 2022</p>
            </div>
        </div>
    );
};

export default Footer;