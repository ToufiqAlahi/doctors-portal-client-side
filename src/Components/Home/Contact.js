import React from 'react';

const Contact = () => {
    return (
        <div className='bg-appointment-background pb-20 flex flex-col mx-auto'>
            <div className='mb-0 pt-20 mx-auto grid grid-cols-1 justify-center '>
                <h3 className='text-xl text-secondary font-bold mb-2 mx-auto' > Contact Us</h3>
                <h3 className='text-3xl text-white mx-auto' > Stay connected with us</h3>
                <input type="text" placeholder="Email Address" className="mt-10 input w-full max-w-xs mx-auto" />
                <input type="text" placeholder="Subject" className="mt-5 input w-full max-w-xs mx-auto" />
                <textarea className="textarea mt-5 w-full max-w-xs mx-auto pb-16" placeholder="Your Message"></textarea>
            </div>

            <button className="  mx-auto mt-10 btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary text-white font-bold ">submit</button>

        </div>
    );
};

export default Contact;