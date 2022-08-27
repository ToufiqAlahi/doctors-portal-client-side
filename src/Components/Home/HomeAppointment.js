import React from 'react';
import Doctor from '../../assets/images/doctor.png'
import './module.HomeAppointment.css'

const HomeAppointment = () => {
    return (
        <div className='lg:mt-72 mb-32 bg-appointment-background w-full p-4 lg:py-0 lg:px-44'>
            <div className=" md:grid  md:grid-cols-2  text-left items-center md:text-left">
                <figure className='hidden lg:block'>
                    <img className=' mt-[-120px]' src={Doctor} alt="Album"></img>
                </figure>
                <div className="align-middle text-left ">
                    <h3 className='text-xl text-secondary text-center md:text-left font-bold mb-2' > Appointment</h3>
                    <h2 className=" text-4xl font-bold w-full text-white">Make an appointment Today</h2>
                    <p className="mt-7  text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="mt-7 btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;