import React from 'react';
import toast from 'react-hot-toast';
import add from '../../img/add.svg'

const AddService = () => {

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const ServiceName = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const newService = { ServiceName: ServiceName, img: img, price: price, rating: rating, description: description }
        form.reset();
        console.log(newService)
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Successfully New Service Add')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='w-10/12 m-auto'>
            <div className='flex my-10 flex-col lg:flex-row lg:justify-between items-center'>
                <div className='lg:w-1/2 text-center'>
                    <img className='w-4/5' src={add} alt="" />
                </div>
                <div className='lg:w-1/2 text-center'>
                    <h1 className="text-3xl text-left font-semibold">Add New Service</h1>
                    <form onSubmit={handleAddService} className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name='img' placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered min-h-16" placeholder="Service Description"></textarea>
                        <button type='submit' className="btn mt-4">Add Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;