import React from 'react';

const SingleBlog = ({ blog, setModalInfo }) => {

    console.log(blog.title)
    return (
        <div>
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

            <div class="mt-8">
                {/* <span class="text-blue-500 uppercase">category</span> */}

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                </h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                    recusandae nulla veritatis id tempore sapiente
                </p>
                <label htmlFor="my-modal-4" onClick={() => (setModalInfo(blog))} class="inline-block text-blue-500 underline hover:text-blue-400">Read more</label>

            </div>
        </div>
    );
};

export default SingleBlog;