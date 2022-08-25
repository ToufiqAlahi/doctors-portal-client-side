import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen max-w-screen lg:bg-banner-background ">
            <div class="hero-content max-w-screen  flex-col lg:flex-row-reverse justify-between ">
                <img src={chair} class="lg:max-w-xl lg:ml-10 max-w-xs rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <h1 class="text-5xl font-bold mt-14 lg:mr-10 lg:mt-0">Your New Smile Starts Here</h1>
                    <p class="py-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary hover:text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;