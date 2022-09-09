import React from 'react';
import chair from '../assets/images/chair.png'
const AppointmentBanner = () => {
    return (
        <div>
            <div className="  hero  lg:min-h-screen items-center max-w-screen lg:bg-banner-background ">
                <div className="hero-content max-w-screen flex-col lg:flex-row-reverse ">
                    <img src={chair} className="lg:max-w-2xl max-w-full rounded-lg shadow-2xl" alt='chair' />
                    <div>
                        <h1 className="text-5xl font-bold mt-8">Your New Smile Starts Here</h1>
                        <p className="my-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white font-bold ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;