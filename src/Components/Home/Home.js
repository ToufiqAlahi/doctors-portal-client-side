import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;