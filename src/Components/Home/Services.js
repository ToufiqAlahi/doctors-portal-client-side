import React from 'react';
import ServiceCard from './ServiceCard';
import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Whitening from '../../assets/images/whitening.png'

const Services = () => {
    const cardData = [
        {
            _id: 1,
            cardImg: Fluoride,
            CardTitle: 'Fluoride Treatment',
            cardDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },

        {
            _id: 2,
            cardImg: Cavity,
            CardTitle: 'Cavity Filling',
            cardDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            cardImg: Whitening,
            CardTitle: "Teeth Whitening",
            cardDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <div>


            <div>
                
            </div>


            <div>
                {


                }
            </div>
        </div>
    );
};

export default Services;