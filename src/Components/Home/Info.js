import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 text-center '>
            <InfoCard cardTitle="Opening Hours" cardTexts="Lorem Ipsum is simply dummy text of the pri" bgclassName="bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" cardTexts="Brooklyn, NY 10036, United States" bgclassName="bg-gradient-to-r  from-slate-800 to-neutral hover:from-primary hover:to-secondary" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" cardTexts="+000 123 456789" bgclassName="bg-gradient-to-r from-secondary to-primary  hover:from-primary hover:to-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;