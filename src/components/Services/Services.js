import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    const data = useLoaderData();
    useTitle('Services')
    // console.log(services);
    // const [user, setUser] = useState({})
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, [])
    return (
        <div className='w-10/12 m-auto'>
            <h1 className="text-3xl font-semibold text-center my-8">MY SPECIALTIES</h1>
            <div className='grid lg:grid-cols-3 gap-4 mb-8'>
                {
                    data.map(service => <div key={service._id} className="card bg-base-100 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.ServiceName}</h2>
                            <p className='text-justify my-4'>{service.description.slice(0, 100) + '...'}</p>
                            <div className='flex mb-4 w-full justify-between items-center'>
                                <h4 className="text-lg">Price: ${service.price}</h4>
                                <h4 className="text-lg">Rating {service.rating}</h4>
                            </div>
                            <div className="card-actions w-full">
                                <Link className='w-full' to={`/services/${service._id}`}><button className="btn btn-primary w-full">Check Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            {/* <div className="flex justify-center items-center">
                <button className="btn btn-outline text-center mb-8">See More</button>
            </div> */}
        </div>
    );
};

export default Services;