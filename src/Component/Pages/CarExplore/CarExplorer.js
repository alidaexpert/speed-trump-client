import React from 'react';
import { Link } from 'react-router-dom';
import {  RatingView } from 'react-simple-star-rating'

const CarExplorer = ({car}) => {
    const {_id,name,price,pic,madeyear,mileage,fuel,horsepower}=car
    return (
       <Link to={'/car/'+ _id}>
            <div className="shadow-lg bg-white overflow-hidden">
            <div className="w-full lg:h-56  overflow-hidden relative ">
                <img src={pic} alt="" className=" transform transition-transform hover:scale-110"/>
                <button className="absolute top-3/4 left-3/4 font-bold text-white bg-pink-600 py-2 px-5 z-50">${price}</button>
            </div>
            <div className="space-y-2 pt-4 uppercase">
          <div className="text-left px-4">
          <h2 className="text-2xl text-pink-600 font-bold"> {name}</h2>
            <RatingView className=" opacity-70" activeColor="#ffffff" size={16} ratingValue={5} /* Rating Props */ />
          </div>
            <div className="border-t-2 text-gray-500 grid grid-cols-4 p-4 font-bold gap-4 border-gray-500">
<span>Build: {madeyear}</span>
<span>{fuel}</span>
<span> {mileage} KM</span>
<span>{horsepower} hp</span>
            </div>
            </div>
           
        </div>
       </Link>
    );
};

export default CarExplorer;