import { faFacebookMessenger, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const clockFont=<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    return (
      <>
         {/* start from here  */}

         <div className=" text-left bg-contact lg:p-20 md:p-8">
             <h2 className="text-red-500 text-3xl font-bold pt-8 text-center">| Contact With Us</h2>
             <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="">
                <div className="bg-pink-900 rounded-md my-8 bg-opacity-20 lg:p-20 p-8 ">
                     <small className="text-red-500 my-8 block ">| Get It Touch</small>
                     <h4 className="my-8 text-gray-100">We are always ready to support you.</h4>
               <div>
                  
                   <input className="w-full my-4 p-4" type="text" name="" id="" placeholder="Full Name" />
                  <input type="email" className="w-full my-4 p-4" name="" id="" placeholder="Email" />
                   <textarea name="" id="" className="w-full my-4 p-4" placeholder="Write your message" cols="30" rows="10"></textarea>
                   <input className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 " type="submit" value="Submit" />
                 
               </div>
                 </div>
                </div>
                 <div className="">
                 <div className="bg-blue-900 rounded-md my-8 bg-opacity-20 lg:p-20 p-8 ">
                 <small className="text-red-500 my-8 block ">| Get It Touch</small>
                     <h4 className="my-8 text-gray-100">Talk With Our Brand Ambasaddor</h4>
                     <p className=" text-gray-100">
             <span className="block my-12">
                 <span className="lg:m-8 mx-2 text-yellow-400 text-xl">{phoneFont}</span> +88 017 4856 8861 </span>
                   <span className="block my-12">
                        <span className="lg:m-8 mx-2 text-yellow-400 text-xl">{inboxFont}</span> contact@speedtrump.com </span>
                   <span className="block my-12"> 
                   <span className="lg:m-8 mx-2 text-yellow-400 text-xl">{mapFont}</span> 1212 Gulshan 01,Dhaka,Bangladesh</span>
                   <span className="block my-12"> 
                   <span className="lg:m-8 mx-2 text-yellow-400 text-xl">{clockFont}</span> Mon - Fri : 09:00am to 09:00pm</span>
                   </p>
                   <p className="flex justify-center mb-0 gap-3 text-xl text-gray-900 px-0">
                        <a href="https://www.facebook.com/AliSainOfficial" className="text-pink-600 hover:text-pink-100"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="text-pink-600 hover:text-pink-100"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className="text-pink-600 hover:text-pink-100"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className="text-pink-600 hover:text-pink-100"><span>{linkedinFont}</span></a>
                    </p>
                 </div>
                 </div>

             </div>
            
         </div>
            
       
        </>
    );
};

export default ContactUs;