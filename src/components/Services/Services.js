import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className='w-10/12 m-auto'>
            <h1 className="text-3xl font-semibold text-center my-8">MY SPECIALTIES{user.length}</h1>
            <div className='grid lg:grid-cols-3 gap-4 mb-8'>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline text-center mb-8">See More</button>
            </div>
        </div>
    );
};

export default Services;