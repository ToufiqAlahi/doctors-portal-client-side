import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:bg-banner-background ">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between ">
                <img src={chair} class="lg:max-w-xl max-w-sm rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <h1 class="text-5xl font-bold mt-14 lg:mt-0 x">Your New Smile Starts Here</h1>
                    <p class="py-6 lg:pr-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary hover:text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;