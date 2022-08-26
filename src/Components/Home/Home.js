import React from 'react';
import Banner from './Banner';
import DentalCard from './DentalCard';
import Info from './Info';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-4 lg:px-10'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCard></DentalCard>
        </div>
    );
};

export default Home;