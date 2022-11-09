import React from 'react';
import useTitle from '../../hooks/useTitle';
import blogImg from '../../img/blog1.svg'

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 flex justify-center'>
                    <img src={blogImg} className="max-w-md rounded-lg  w-full" alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Difference between SQL and NoSQL
                        </div>
                        <div className="collapse-content">
                            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is JWT, and how does it work?
                        </div>
                        <div className="collapse-content">

                            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br /><br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between javascript and NodeJS?
                        </div>
                        <div className="collapse-content">
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse mb-5  collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How does NodeJS handle multiple requests at the same time?
                        </div>
                        <div className="collapse-content">
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;