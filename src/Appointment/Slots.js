import React from 'react';

const Slots = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className=" mx-auto card w-96 bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name} </h2>
                <p className=' font-semibold'> {
                    slots.length > 0
                        ? <span> {slots[0]} </span>
                        : <span className='text-red-600'>No slot available!!</span>
                }


                </p>
                <p> {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}   Available </p>
                <div className="card-actions">

                    {
                        slots.length > 0
                            ? <label
                                onClick={() => setTreatment(service)}
                                htmlFor="booking-modal"
                                className="btn btn-primary text-xl capitalize mx-auto mt-10  bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white  "
                            >Book Appointment</label>
                            : <button disabled className="btn  capitalize px-8 text-xl  mx-auto mt-10   ">Try Another Date</button>

                    }

                    


                </div>
            </div>
        </div>
    );
};

export default Slots;