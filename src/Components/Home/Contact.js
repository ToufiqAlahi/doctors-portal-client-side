import React from 'react';

const Contact = () => {
    return (
        <div className='min-h-screen  my-16 lg:mt-0 bg-appointment-background  py-20 mx-auto grid grid-cols-1 justify-center '>
            <h3 className='text-xl text-secondary font-bold mx-auto' > Contact Us</h3>
            <h3 className='text-3xl text-white mx-auto' > Stay connected with us</h3>
            <input type="text" placeholder="Email Address" className=" mt-10 input w-full max-w-xs mx-auto" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs mx-auto" />
            <textarea className="textarea w-full max-w-xs mx-auto pb-16" placeholder="Your Message"></textarea>
            <button className=" px-8 text-xl capitalize  mx-auto mt-10 btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white  ">submit</button>
        </div>
    );
};

export default Contact;