import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = () => {
    const data = useLoaderData();
    return (
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
    );
};

export default Service;