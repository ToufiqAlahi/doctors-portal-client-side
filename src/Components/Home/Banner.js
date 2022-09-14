import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="mb-44 hero max-h-screen items-center lg:bg-banner-background">
            <div className="lg:h-[calc(100vh-100px)] px-3 lg:px-0  flex justify-center items-center gap-24 flex-col lg:flex-row-reverse ">
                <img src={chair} className="lg:max-w-2xl max-w-full rounded-lg shadow-2xl" alt='chair' />
                {/* <div className='mx-12'></div> */}
                <div className='lg:w-mytt'>
                    <h1 className="text-5xl font-bold mt-8">Your New Smile Starts Here</h1>
                    <p className="my-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;