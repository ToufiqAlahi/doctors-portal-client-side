import React from 'react';

const ServiceCard = ({cardData}) => {
    return (
        <div className="card max-w-screen bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cardData.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {cardData.title} </h2>
                <p>{cardData.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;