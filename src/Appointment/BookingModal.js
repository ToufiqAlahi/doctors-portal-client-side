import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const {_id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(Math.random)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">

                    <h3 className="font-bold  text-xl text-secondary mb-12">Booking for : {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center items-center'>
                        <input disabled type="text" value={format(date, 'PP')} className="font-bold input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots && slots.map(slot => <option  value={slot}> {slot} </option>)
                            }
                            
                        </select>

                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Your Email Address" className="input input-bordered w-full" />
                        <input type="text" name='Phone' placeholder="Your Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full " />
                    </form>


                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn btn-sm font-extrabold text-xl text-white btn-circle hover:bg-secondary absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;