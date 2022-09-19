import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment , refetch}) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null);
            });


    }


    // const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // console.log(user);

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
                                slots ? slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}> {slot} </option>) : ''
                            }
                        </select>

                        <input disabled value={user?.displayName || ''} type="text" placeholder="Your Name" className="font-bold input input-bordered w-full " />
                        <input disabled value={user?.email || ''} type="email" name='email' placeholder="Your Email Address" className="font-bold input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full" />
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