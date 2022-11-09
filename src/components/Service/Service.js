import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../Context/UserContext';
import toast from 'react-hot-toast';

const Service = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review/${data._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [data._id])
    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const customerName = form.customerName.value;
        const url = form.url.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const review = { name: name, customerName: customerName, photoURL: url, rating: rating, description: description, uid: data._id, email: user.email }
        console.log(review)
        form.reset();
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Review Successful')
                }
            })
    }
    return (
        <div>
            <div className="hero  min-h-screen bg-base-200">
                <div className="hero-content lg:w-10/12 m-auto flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/160/160/arch">
                            {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                            <img className="mask mask-squircle h-80 w-80" alt='' src="https://placeimg.com/160/160/arch" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='lg:ml-10 lg:w-1/2'>
                        <div className="form-control max-w-xs">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" placeholder="Type here" readOnly defaultValue={data.ServiceName} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Type here" readOnly defaultValue={data.price} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" placeholder="Type here" readOnly defaultValue={data.rating} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea min-h-16" readOnly defaultValue={data.description} placeholder="Bio"></textarea>

                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold text-center my-8">Service Reviews</h1>
                <div className='grid lg:grid-cols-4 gap-2 mb-8'>
                    {
                        reviews.map(review => <div key={review._id} className="card w-4/5 m-auto bg-base-100 shadow-2xl">
                            <div className="avatar mt-10 flex justify-center items-center">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={review.photoURL} />
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{review.name}</h2>
                                <p className='text-justify my-2'>{review.description}</p>
                                <div className='flex mb-4 w-full justify-between items-center'>
                                    <h4 className="text-md">Rating: {review.rating}</h4>
                                    <h4 className="text-md font-semibold">{review.customerName}</h4>
                                </div>
                                {/* <div className="card-actions w-full">
                                <Link className='w-full' to={`/services/${service._id}`}><button className="btn btn-primary w-full">Check Details</button></Link>
                            </div> */}
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold text-center my-8">Add Reviews</h1>
                <div className='flex justify-center w-full'>
                    <form onSubmit={handleReview} className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='name' readOnly defaultValue={data.ServiceName} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Customer Name</span>
                        </label>
                        <input type="text" name='customerName' readOnly defaultValue={user.displayName} placeholder="Customer Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='url' defaultValue={user.photoURL} placeholder="URL" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered min-h-16" placeholder="Service Description"></textarea>
                        <button type='submit' className="btn my-4">Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Service;