import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const UpdateReview = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const newReview = { name, description }
        console.log(newReview)
        fetch(`https://assignment-11-server-wheat.vercel.app/reviews/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Review Update Successful')
                }
            })

    }
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-8">Add Reviews</h1>
            <div className='flex justify-center w-full'>
                <form onSubmit={handleUpdate} className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' readOnly defaultValue={user.displayName} placeholder="Customer Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' defaultValue={data.description} className="textarea textarea-bordered min-h-16" placeholder="Service Description"></textarea>
                    <button type='submit' className="btn my-4">Update Review</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;