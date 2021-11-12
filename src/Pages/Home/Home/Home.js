import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Sports from '../Sports/Sports';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Sports></Sports>
            <Footer></Footer>
        </div>
    );
};

export default Home;