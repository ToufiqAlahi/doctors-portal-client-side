import React from 'react';
import Banner from './Banner';
import DentalCard from './DentalCard';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCard></DentalCard>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;