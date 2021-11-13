import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import girl from '../../../images/about/01.jpg'
import DisplayReview from '../Home/DisplayReview/DisplayReview';
// import tour1 from '../../../images/optimize/aboutUs.jpg'
// import tour2 from '../../../images/optimize/aboutUs-2.jpg'
import "./AboutUs.css"
const AboutUs = () => {
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    return (
             <div className="bg-about text-gray-200">
           
        <div className="py-8 bg-blue-900 bg-opacity-10">
            <div  className="lg:px-20 lg:my-8">
            <div className=" grid lg:grid-cols-2 grid-cols-1">
               
                    <div className="relative  order-2 lg:order-1 sm:mb-8">
                        <img src={girl} className="w-full rounded-md" alt="" />
                    </div>
                    <div className="p-8 pt-8  lg:order-2 order-1 lg:py-0 sm:mt-12 lg:mt-8">
                        <small className="text-red-500 md:mt-20 mt-10 text-xl">| About us</small>
                        <h2 className="text-2xl"> We are Trusted Name in Car Sales & Services</h2>
                        <h3 className="text-3xl my-4">Used by Million of People Every Month!</h3>
                        <small className="block  text-base text-justify">For buy a car ,visit our showroom or call us just dial +7 556 888 7777.. Our team are availble 24 hours.
                             </small>
                      <div className="flex gap-4 justify-center">
                      <ul className="text-left py-8 text-gray-100">
                            <li><span className="text-indigo-600">{checkFont}</span> Best Prices</li>
                            <li><span className="text-indigo-600">{checkFont} </span>
                            Test Drive Services</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                            Car Drop Facility</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                            Special Finance Facility</li>
                        </ul>
                        <ul className="text-left py-8 text-gray-100">
                        <li><span className="text-indigo-600">{checkFont} </span> 
                            National Coverage</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                            No Booking Fee</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                            Frequent Inspections</li>
                            <li><span className="text-indigo-600">{checkFont} </span> 
                            Well Maintained Vehicles</li>
                        </ul>
                      </div>

                    </div>
            </div>
        </div>
        <DisplayReview></DisplayReview>
        </div>
        </div>
    );
};

export default AboutUs;