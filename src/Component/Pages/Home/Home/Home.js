import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import CarsProduct from '../CarsProduct/CarsProduct';
import DisplayReview from '../DisplayReview/DisplayReview';

const Home = () => {
    return (
        <div>
            <Banner/>
            <CarsProduct></CarsProduct>
            <DisplayReview></DisplayReview>
            <CarGallery></CarGallery>
        </div>
    );
};

export default Home;