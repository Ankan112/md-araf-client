import React from 'react';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Modal from '../Modal/Modal';
import SingleBlog from './SingleBlog';

const Blog = () => {
    useTitle('Blog')
    const [modalInfo, setModalInfo] = useState({});
    console.log(modalInfo)
    const blogs = [
        {
            id: 1,
            title: "Example Object",
            description: "This is an example object with an id, title, and description properties."
        },
        {
            id: 2,
            title: "Title two object",
            description: "This is an example object with an id, title, and description properties."
        },
        {
            id: 3,
            title: "Hello world",
            description: "This is an example object with an id, title, and description properties."
        },
    ]
    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content w-full flex-col lg:flex-row-reverse">
        //         <div className='lg:w-1/2 flex justify-center'>
        //             <img src={blogImg} className="max-w-md rounded-lg  w-full" alt='' />
        //         </div>
        //         <div className='lg:w-1/2'>
        //             <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     Difference between SQL and NoSQL
        //                 </div>
        //                 <div className="collapse-content">
        //                     <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        //                 </div>
        //             </div>
        //             <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     What is JWT, and how does it work?
        //                 </div>
        //                 <div className="collapse-content">

        //                     <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br /><br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
        //                 </div>
        //             </div>
        //             <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     What is the difference between javascript and NodeJS?
        //                 </div>
        //                 <div className="collapse-content">
        //                     <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        //                 </div>
        //             </div>
        //             <div tabIndex={0} className="collapse mb-5  collapse-plus border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     How does NodeJS handle multiple requests at the same time?
        //                 </div>
        //                 <div className="collapse-content">
        //                     <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

                    <button class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <hr class="my-8 border-gray-200 dark:border-gray-700" />

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {
                        blogs.map(blog => <SingleBlog
                            key={blog.id}
                            blog={blog}
                            setModalInfo={setModalInfo}
                        ></SingleBlog>

                        )
                    }

                </div>
                <Modal modalInfo={modalInfo}></Modal>
            </div>
        </section>
    );
};

export default Blog;