import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../img/undraw_page_not_found_re_e9o6.svg'

const NotFound = () => {
    return (
        <div className='flex w-10/12 m-auto justify-center items-center'>
            <div className='text-center'>
                <img className='w-3/5 my-10 m-auto' src={notFound} alt="" />
                <Link to='/'><u>Go Home</u></Link>
            </div>
        </div>
    );
};

export default NotFound;