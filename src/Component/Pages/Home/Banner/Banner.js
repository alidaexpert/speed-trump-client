import React, { useEffect, useState } from "react";
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
import './Banner.css'
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination
} from 'swiper';
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

const Banner = () => {
    const [banners,setBanners]=useState([])
    useEffect(()=>{
        fetch('https://speed-trump-bd.herokuapp.com/banner')
        .then(res=>res.json())
        .then(data=>setBanners(data))
    },[])
    
    return (
        <div>
              <Swiper pagination={{
  "dynamicBullets": true
}}  autoplay={{
    "delay": 2500,
    "disableOnInteraction": false
  }} className="mySwiper">
  {
banners.map(banner=><div key={banner._id}>
    <SwiperSlide className="relative ">
        <img src={banner.pic} className="" alt="" />
       <div className='absolute bg-black bg-opacity-50 text-white p-5'> 
       <div className="space-y-4 p-5"><h2 className='lg:text-6xl text-2xl'> <span className='text-font'>{banner.name}</span> </h2>
        <p className='lg:text-3xl  text-sm'>{banner.Description}</p>
       <Link to="/cars" className="block">
       <button className="bg-pink-700 lg:py-2 py-1 px-5 font-medium  text-white">Book A Car</button>
       </Link>
        </div>
        </div>
    </SwiperSlide>
</div>)
  }
  </Swiper>
        </div>
    );
};

export default Banner;