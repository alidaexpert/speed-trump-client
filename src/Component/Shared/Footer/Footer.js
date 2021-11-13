import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import Lottie from "react-lottie"
import logo from '../../../images/logo/f.svg'

const Footer = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const clockFont=<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className=" bg-img">
           <div className="text-white p-4">
           <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 text-left gap-4">
                <div className="">
                    <h3 className="text-pink-600 bg-opacity-95 flex items-center gap-2 text-4xl mb-2">
                        <img src={logo} alt="" />
                       
                         Speed Trump</h3>
                    <p className="text-gray-300 text-sm">
                        Spped Trump is an speed car based website.Here only sell world best speed car. Check out our explore page and choose ur favorite speed car.
                      
                    </p>
<p className="text-4xl my-3 text-yellow-400">Follow Us</p>
                    <p className="flex gap-3">
                        <a href="https://www.facebook.com/AliSainOfficial" className="text-4xl text-blue-800 hover:text-gray-100"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="text-4xl text-blue-500 hover:text-gray-100"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className=" text-4xl text-pink-500 hover:text-gray-100"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className=" text-4xl text-blue-500 hover:text-gray-100"><span>{linkedinFont}</span></a>
                    </p>
                    </div>
                <div className="">
                   <h5  className="text-indigo-400  text-2xl mb-4"> Quick Link</h5>
                   <ul className="space-y-2">
                   <li><Link className="hover:border-red-500 border-b-2" to="/">
                           Home
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2" to="/cars">
                           Explore
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2"  to="/car_gallery">
                           Car Gallery
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/about_us">
                           About
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/contact_us">
                           Contact
                       </Link></li>
                   </ul>
                    </div>
                <div className="">
                   <h5 className="text-indigo-400 text-2xl mb-4">Products</h5>
                   <ul className="space-y-2">
                       <li>Ferrary</li>
                       <li>BMW</li>
                       <li>Lamborghini</li>
                       <li>Bugatti</li>
                       <li>Venom</li>
                   </ul>
                  
                    </div>
                <div className="">
                    <h5 className="text-indigo-400 text-2xl mb-4">Information</h5>
                    <ul className="space-y-2">
                    <li><span className="mr-2 text-yellow-400">{phoneFont}</span> <small className="text-sm"> +88 017 4856 8861</small></li>
                    <li><span className="mr-2 text-yellow-400">{inboxFont}</span> <small className="text-sm">contact@speedtrump.com</small></li>
                    <li><span className="mr-2 text-yellow-400 ">{mapFont}</span> <small className="text-sm">1212 Gulshan 01,Dhaka,Bangladesh</small></li>
                    <li><span className="mr-2 text-yellow-400 ">{clockFont}</span> <small className="text-sm">Mon - Fri : 09:00am to 09:00pm</small></li>
                    </ul>
                    </div>


            </div>
            <div className=" border-t-2 border-pink-600 text-center pt-3">
<small>&copy; Copyright 2021 | All Right Reserved</small>
            </div>
           </div>
        </div>
    );
};

export default Footer;