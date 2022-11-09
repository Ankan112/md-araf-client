import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/UserContext';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    useTitle('Review')
    const [reviews, setReviews] = useState([])
    const [remainingReview, setRemainingReview] = useState(reviews)
    console.log(remainingReview)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    console.log(reviews)

    const handleDelete = (id) => {
        const agree = window.confirm(`Are You Sure you want to delete`)

        if (agree) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Review Delete Successful")
                        const review = remainingReview.filter(comment => comment._id !== id)
                        setRemainingReview(review);
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-8">My Reviews</h1>
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
                            <div className="card-actions w-full">
                                <button className="btn btn-primary w-full">Update</button>
                                <button onClick={() => handleDelete(review._id)} className="btn btn-dengar w-full">Delete</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;