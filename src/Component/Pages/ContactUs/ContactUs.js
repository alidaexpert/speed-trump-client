import { faFacebookMessenger, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactUs = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    return (
      <>
         {/* start from here  */}

         <div className=" text-left lg:p-20 md:p-8">
             <h2 className="text-red-500 text-3xl pt-8 text-center">| Contact With Us</h2>
             <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="">
                <div className="bg-blue-900 rounded-md my-8 bg-opacity-10 lg:p-20 p-8 ">
                     <small className="text-red-500 my-8 block ">| Get It Touch</small>
                     <h4 className="my-8 text-gray-900">We are always ready to solve your all problem.</h4>
               <div>
                  
                   <input className="w-full my-4 p-4" type="text" name="" id="" placeholder="Full Name" />
                  <input type="email" className="w-full my-4 p-4" name="" id="" placeholder="Email" />
                   <textarea name="" id="" className="w-full my-4 p-4" placeholder="Write your message" cols="30" rows="10"></textarea>
                   <input className="w-full bg-indigo-700 text-white py-2 " type="submit" value="Submit" />
                 
               </div>
                 </div>
                </div>
                 <div className="">
                 <div className="bg-blue-900 rounded-md my-8 bg-opacity-10 lg:p-20 p-8 ">
                 <small className="text-red-500 my-8 block ">| Get It Touch</small>
                     <h4 className="my-8 text-gray-900">Talk With Our Tour Advisor</h4>
                     <p className=" text-gray-900">
             <span className="block my-12">
                 <span className="lg:m-8 text-indigo-400 bg-gray-900 rounded-full p-4">{phoneFont}</span> +7 845 544 2255 </span>
                   <span className="block my-12">
                        <span className="lg:m-8 text-indigo-400 bg-gray-900 rounded-full p-4">{inboxFont}</span> contact@tourexpress.com </span>
                   <span className="block my-12"> 
                   <span className="lg:m-8 text-indigo-400 bg-gray-900 rounded-full p-4">{mapFont}</span> 1212 Rechard Lane,Rome,Italy</span>
                   </p>
                   <p className="flex justify-center mb-0 gap-3 text-xl text-gray-900 px-0">
                        <a href="https://www.facebook.com/AliSainOfficial" className="text-gray-900"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="text-gray-900"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className="text-gray-900"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className="text-gray-900"><span>{linkedinFont}</span></a>
                    </p>
                 </div>
                 </div>

             </div>
            
         </div>
            
       
        </>
    );
};

export default ContactUs;