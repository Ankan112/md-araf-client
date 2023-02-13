import React from 'react';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Modal from '../Modal/Modal';
import SingleBlog from './SingleBlog';
import image1 from '../../img/b1.webp'
import image2 from '../../img/b2.jpg'
import image3 from '../../img/b3.jpg'
import image4 from '../../img/b4.jpg'
import image5 from '../../img/b5.jpg'
import image6 from '../../img/b6.jpg'

const Blog = () => {
    useTitle('Blog')
    const [modalInfo, setModalInfo] = useState({});
    const blogs = [
        {
            id: 1,
            image: image1,
            title: "Why should we hire photographer?",
            description: "Skill and expertise: Professional photographers have the technical expertise, artistic vision, and experience to create high-quality images that capture the moment and tell a story. They have a deep understanding of lighting, composition, and other technical aspects of photography that can be difficult for amateur photographers to master.Professional photographers have access to high-end equipment that can produce stunning images. This equipment can make a big difference in the quality of the final product. Hiring a professional photographer allows you to preserve special moments and memories in a way that will last a lifetime. You can look back on the photos for years to come and relive those moments. Hiring a professional photographer saves you time and effort. You don't have to worry about taking the photos yourself, editing them, or worrying about the final result. You can simply relax and enjoy the moment, knowing that the photographer will handle everything."
        },
        {
            id: 2,
            image: image2,
            title: "10 tips for taking better photos with your smartphone",
            description: "This blog post can provide tips for people who want to take better photos using their smartphone. Topics can include using natural light, adjusting the exposure and focus, using editing apps to enhance the images, and framing the shots effectively."
        },
        {
            id: 3,
            image: image3,
            title: "The importance of lighting in photography",
            description: "Light is one of the most crucial elements in photography, as it has the power to make or break a photo. Good lighting can enhance the mood, add depth and dimension, and create a sense of atmosphere. On the other hand, poor lighting can cause harsh shadows, dull colors, and a flat, unappealing image. Understanding the basics of light, such as its direction, quality, and color, can help photographers make informed decisions about how to use it to their advantage."
        },
        {
            id: 4,
            image: image4,
            title: "How to compose a photo: The rule of thirds and other techniques",
            description: " Composition is the arrangement of elements in a photo, and it can greatly impact the overall look and feel of an image. One popular technique is the rule of thirds, which involves imagining a grid of nine squares over the image, with key elements aligned along the grid lines or at the intersections. This creates a balanced and aesthetically pleasing composition. Other techniques include using leading lines, symmetry, and patterns to guide the eye, as well as playing with negative space to add interest."
        },
        {
            id: 5,
            image: image5,
            title: "Landscape photography: Tips for capturing stunning outdoor scenes",
            description: "Landscape photography is a genre that focuses on capturing the beauty of the natural world, whether it be a sweeping vista, a towering mountain, or a quiet stream. To take stunning landscape photos, photographers should consider the time of day, weather conditions, and lighting. They should also be mindful of foreground elements, as these can add depth and context to the scene. Finally, they should experiment with different angles, perspectives, and compositions to find the one that best captures the essence of the landscape."
        },
        {
            id: 6,
            image: image6,
            title: "The evolution of photography: From film to digital and beyond",
            description: "Photography has come a long way since its invention in the early 19th century. Initially, photographs were captured on film, which required careful processing and printing to produce a final image. With the advent of digital photography, the process became much simpler and more accessible, as images could be captured, stored, and edited using digital cameras and computers. Today, photography continues to evolve with the introduction of new technologies such as artificial intelligence, virtual reality, and augmented reality, offering endless possibilities for capturing and sharing the world around us."
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