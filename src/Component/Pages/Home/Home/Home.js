import React from 'react';
import Banner from '../Banner/Banner';
import CarsProduct from '../CarsProduct/CarsProduct';
import DisplayReview from '../DisplayReview/DisplayReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarsProduct></CarsProduct>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;