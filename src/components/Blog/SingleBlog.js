import React from 'react';

const SingleBlog = ({ blog, setModalInfo }) => {

    console.log(blog.title)
    return (
        <div>
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog.image} alt="" />

            <div class="mt-8">
                {/* <span class="text-blue-500 uppercase">category</span> */}

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                </h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">
                    {blog.description.substring(0, 200) + "..."}
                </p>
                <label htmlFor="my-modal-4" onClick={() => (setModalInfo(blog))} class="inline-block text-blue-500 underline cursor-pointer hover:text-blue-400">Read more</label>

            </div>
        </div>
    );
};

export default SingleBlog;