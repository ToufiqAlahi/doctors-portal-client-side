import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import DentalCard from './DentalCard';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCard></DentalCard>
            <HomeAppointment></HomeAppointment>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;