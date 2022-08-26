import React from 'react';
import ServiceCard from './ServiceCard';
import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Whitening from '../../assets/images/whitening.png'

const Services = () => {
    const cardDatas = [
        {
            _id: 1,
            img: Fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },

        {
            _id: 2,
            img: Cavity,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: Whitening,
            title: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <div className='px-4 lg:px-10 my-32 justify-center'>
            <div className='text-center' >
                <h3 className='text-xl text-secondary uppercase font-bold mb-2' > our services</h3>
                <h2 className='text-3xl uppercase'>Services we provide</h2>
                
            </div>


            <div className='mt-16 grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
                {
                    cardDatas.map(cardData => <ServiceCard
                        key={cardData._id}
                        cardData={cardData}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;