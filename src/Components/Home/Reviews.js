import React from 'react';
import Herry from '../../assets/images/people1.png'
import Angella from '../../assets/images/people2.png'
import Cody from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';
import './module.Review.css';
// import leftQuote from '../../assets/images/left-quote.svg';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            img: Herry,
            name: 'Winson Herry',
            address: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 2,
            img: Angella,
            name: 'Angella Zoley',
            address: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 3,
            img: Cody,
            name: 'Cody Simpson',
            address: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]
    return (
        <div className='px-4 lg:px-10 lg:min-h-screen mt-32 justify-center'>

            <div className='mb-20 review-container  flex'>
                <div className='text-left' >
                    <h3 className='text-xl text-secondary uppercase font-bold mb-2' > Testimonial</h3>
                    <h2 className='text-3xl uppercase mb-20'>What Our Patients Says</h2>
                </div>
                <div>
                    {/* <img src={leftQuote} alt=""></img> */}
                </div>
            </div>

            <div className='grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default Reviews;