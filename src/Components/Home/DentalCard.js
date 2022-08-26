import React from 'react';
import DentalImg from '../../assets/images/treatment.png'
import './module.dental.css'

const DentalCard = () => {
    return (
        <div className='mb-32 lg:bg-banner-background'>
            <div class="lg:mx-40 grid grid-cols-1 md:grid-cols-2 gap-20  justify-center text-left items-center lg:text-left">
                <figure>
                    <img className='border rounded-xl' src={DentalImg} alt="Album"></img>
                </figure>
                <div class="align-middle text-left ">
                    <h2 class=" text-5xl font-bold w-full">Exceptional Dental Care, on Your Terms</h2>
                    <p class="mt-7 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="mt-7 btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCard;