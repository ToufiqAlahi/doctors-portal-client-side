import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='border shadow-xl rounded-3xl p-10'>
            <div>
                <p>{review.text} </p>
            </div>

            <div className='w-3/4 grid grid-cols-2 items-center mt-7'>
                <div className="">
                    <img className="mask mask-circle border-4 border-secondary rounded-full " src={review.img} alt=""></img>

                </div>

                <div>
                    <h3 className='font-bold text-xl'>{review.name}</h3>
                    <p className=" text-black py-2">{review.address}</p>
                </div>
            </div>
        </div>
        //     <div className=" min-h-screen bg-base-200"> 
        // </div>
    );
};

export default ReviewCard;