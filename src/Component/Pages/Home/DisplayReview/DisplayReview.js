import React, { useEffect, useState } from "react";
// import ReactStars from "react-rating-stars-component";
import {  RatingView } from 'react-simple-star-rating'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "../../../../styles.css";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Parallax
} from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// install Swiper modules
SwiperCore.use([Autoplay,Parallax]);
const DisplayReview = () => {
    const quoteRight=<FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
    const quoteLeft=<FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
   const [displayReviews,setDisplayReviews]=useState([])
   useEffect(()=>{
       fetch('https://speed-trump-bd.herokuapp.com/reviews')
       .then(res=>res.json())
       .then(data=>setDisplayReviews(data))
   },[])
   
    return (
        <div className='py-5 bg-white'>
           <div className=' pb-5'>
           <h2 className="text-pink-600 text-4xl font-bold pt-8 text-center">| Our Customer says</h2>
            <p className="text-pink-500 font-bold">And give their valuable review</p>
           </div>
   <Swiper speed={600} parallax={true} autoplay={{
    "delay": 2000,
    "disableOnInteraction": false
  }}  className="mySwiper h-96">
 {
     displayReviews.map(review=><SwiperSlide key={review._id}>
    <div className="relative text-center justify-center space-y-4 rounded-md bg-gray-900 p-10 text-white"> <span className="absolute left-3/4 top-16  text-3xl text-gray-600">{quoteRight}</span>
    <span className="absolute left-10 top-3/4 text-3xl text-gray-600">{quoteLeft}</span>
   <div className="flex justify-center"> <div className="w-24 border-2 border-red-500 h-24 rounded-full   overflow-hidden"> <img src={review.pic} alt="" /></div></div>
      <h2 className='text-4xl'>{review.name}</h2>
      <p className='p-5'>{review.description}</p>
      <div className="flex justify-center">
     
   <RatingView  ratingValue={review.rating} /* Rating Props */ />
      </div>
    </div>
   
        </SwiperSlide>)
 }
  </Swiper>
  

        </div>
    );
};

export default DisplayReview;