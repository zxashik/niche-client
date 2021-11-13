import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Sports from '../Sports/Sports';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services
                limit={6}
            />
            <Reviews></Reviews>
            <Sports></Sports>
            <Footer></Footer>
        </div>
    );
};

export default Home;