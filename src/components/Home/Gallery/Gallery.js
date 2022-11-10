import React from 'react';
import img1 from '../../../img/album/1.jpg'
import img2 from '../../../img/album/2.jpg'
import img3 from '../../../img/album/3.jpg'
import img4 from '../../../img/album/4.jpg'
import img5 from '../../../img/album/5.jpg'
import img6 from '../../../img/album/6.jpg'
import img7 from '../../../img/album/7.jpg'
import img8 from '../../../img/album/8.jpg'

const Gallery = () => {
    return (
        <div className='w-10/12 m-auto'>
            <h1 className="text-3xl font-semibold text-center my-8">My Gallery</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 mb-8'>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img1} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img2} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img3} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img4} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img5} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img6} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img7} alt='' />
                </div>
                <div className="card  m-auto bg-base-100 border-2 my-4 shadow-2xl">
                    <img className="mask mask-square m-4" src={img8} alt='' />
                </div>

                {/* https://i.ibb.co/kKPcDwH/pexels-chan-walrus-958545.jpg food
                https://i.ibb.co/hKMCTzd/pexels-cottonbro-studio-8942300.jpg drink
                https://i.ibb.co/bdpBbS7/pexels-cup-of-couple-8014834.jpg  brith
                https://i.ibb.co/3MZy9W3/pexels-farddin-protik-2106463-1.jpg  wedding
                https://i.ibb.co/rMtQP36/pexels-pixabay-458976.jpg  animal
                https://i.ibb.co/n05HRK0/pexels-tembela-bohle-1884583.jpg fashion
                https://i.ibb.co/vV1gj9z/pexels-the-glorious-studio-10030285.jpg jwellery */}


            </div>
        </div>
    );
};

export default Gallery;