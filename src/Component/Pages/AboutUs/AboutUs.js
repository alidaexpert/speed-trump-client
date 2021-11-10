import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import tour1 from '../../../images/optimize/aboutUs.jpg'
import tour2 from '../../../images/optimize/aboutUs-2.jpg'
import "./AboutUs.css"
const AboutUs = () => {
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    return (
             <div>
           
        <div className="py-8 bg-blue-900 bg-opacity-10">
            <div  className="lg:px-20 lg:my-8">
            <div className=" grid lg:grid-cols-2 grid-cols-1">
               
                    <div className="relative  order-2 lg:order-1 sm:mb-8">
                        <img src={tour1} className="w-full rounded-md" alt="" />
                        <img src={tour2} className="w-2/4 border-4 border-indigo-500 rounded-md absolute top-3/4 lg:left-3/4 left-1/2" alt="" />
                    </div>
                    <div className="p-8 pt-8  lg:order-2 order-1 lg:py-0 sm:mt-12 lg:mt-8">
                        <small className="text-red-500 md:mt-20 mt-10 text-xl">| About us</small>
                        <h3 className="text-3xl my-4">If you want to get great tour. We are here for you.</h3>
                        <small className="block text-sm text-justify">We are always preapare to plan new tour with new location. Our Tour team are availble 24 hours. Any Information ,You can dial +7 556 888 7777.
                            Our Services are available for u anytime. </small>
                      <div className="flex justify-center">
                      <ul className="text-left py-8 text-gray-500">
                            <li><span className="text-indigo-600">{checkFont}</span> Quality Team</li>
                            <li><span className="text-indigo-600">{checkFont} </span>
                             100% trusted we are</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                             All time support</li>
                            
                        </ul>
                      </div>

                    </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default AboutUs;