import React from 'react';

const Contact = () => {
    return (
        <div className='bg-appointment-background mb-32 py-20 mx-auto grid grid-cols-1 justify-center '>
            <h3 className='text-xl text-secondary font-bold mb-2 mx-auto' > Contact Us</h3>
            <h3 className='text-3xl text-white mx-auto' > Stay connected with us</h3>
            <input type="text" placeholder="Email Address" class="mt-10 input w-full max-w-xs mx-auto" />
            <input type="text" placeholder="Subject" class="mt-5 input w-full max-w-xs mx-auto" />
            <textarea class="textarea mt-5 w-full max-w-xs mx-auto pb-16" placeholder="Your Message"></textarea>
        </div>
    );
};

export default Contact;