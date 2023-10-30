import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";

import './CarGallery.css'
import gallery1 from '../../../../images/carGallery/01.jpg'
import gallery2 from '../../../../images/carGallery/02.jpg'
import gallery3 from '../../../../images/carGallery/03.jpg'
import gallery4 from '../../../../images/carGallery/11.jpg'
import gallery5 from '../../../../images/carGallery/05.jpg'
import gallery7 from '../../../../images/carGallery/07.jpg'
import gallery8 from '../../../../images/carGallery/08.jpg'
import gallery9 from '../../../../images/carGallery/09.jpg'
import gallery10 from '../../../../images/carGallery/10.jpg'
export default class Example extends React.Component {
    
state = {
        goToSlide: 0,
        goToSlideDelay:200,
        offsetRadius: 2,
        showNavigation: true,
        enableSwipe: true,
        config: config.gentle
      };

    slides = [
        {
          key: '1',
          content:  <div className="relative">
               <img  src={gallery5} alt="1" /> 
          <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
          <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
          <small className="text-pink-600 lg:text-base">Wonderful car</small>
          </div>
          </div>
        },
        {
          key: '2',
          content: <div className="relative">
          <img  src={gallery3} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Marcedes</p>
      <small className="text-pink-600 lg:text-base">Future car</small>
      </div>
      </div>},
        {
          key: '3',
          content:   <div className="relative">
          <img  src={gallery1} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Audi</p>
      <small className="text-pink-600 lg:text-base">Super Fast Car</small>
      </div>
      </div>
        },
        {
          key: '4',
          content: 
          <div className="relative">
          <img  src={gallery4} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Jaguer</p>
      <small className="text-pink-600 lg:text-base">Speedy Car</small>
      </div>
      </div>
         
        },
        {
          key: '5',
          content:  <div className="relative">
          <img  src={gallery8} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Venom</p>
      <small className="text-pink-600 lg:text-base">Tea Break</small>
      </div>
      </div>
        },
        {
          key: '6',
          content: <div className="relative">
          <img  src={gallery7} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Marcedes</p>
      <small className="text-pink-600 lg:text-base">Limitless</small>
      </div>
      </div>
        },
        {
          key: '7',
          content:  <div className="relative">
          <img  src={gallery9} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
      <small className="text-pink-600 lg:text-base">Be Limitless</small>
      </div>
      </div>
        },
        {
          key: '8',
          content:  <div className="relative">
          <img  src={gallery2} alt="1" /> 
      <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
      <p className=' text-white lg:text-4xl text-base'>Lamborghini</p>
      <small className="text-pink-600 lg:text-base">Future Advance</small>
      </div>
      </div>
        },
        {
            key: '9',
            content: <div className="relative">
            <img  src={gallery10} alt="1" /> 
        <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-2/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
        <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
        <small className="text-pink-600 lg:text-base">The Wonderful car</small>
        </div>
        </div>
          }
      ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
      });

     
    // let slides = [
    //     <div className="relative">
    //     <img  src={gallery5} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
    // <small className="text-pink-600 lg:text-base">Wonderful car</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery3} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Marcedes</p>
    // <small className="text-pink-600 lg:text-base">Future car</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery1} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Audi</p>
    // <small className="text-pink-600 lg:text-base">Super Fast Car</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery4} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Jaguer</p>
    // <small className="text-pink-600 lg:text-base">Speedy Car</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery8} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Venom</p>
    // <small className="text-pink-600 lg:text-base">Tea Break</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery7} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Marcedes</p>
    // <small className="text-pink-600 lg:text-base">Limitless</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery9} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
    // <small className="text-pink-600 lg:text-base">Be Limitless</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery2} alt="1" /> 
    // <div className="absolute `lg:top-3/4 top-2/4` font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Lamborghini</p>
    // <small className="text-pink-600 lg:text-base">Future Advance</small>
    // </div>
    // </div>,
    //     <div className="relative">
    //     <img  src={gallery10} alt="1" /> 
    // <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    // <p className=' text-white lg:text-4xl text-base'>Ferrari</p>
    // <small className="text-pink-600 lg:text-base">The Wonderful car</small>
    // </div>
    // </div>,
    //     ];
        // const callback = function(index){
        //     console.log("callback",index);}
    
    render (){ 
    return (
        <div className=" h-full py-10 bg-gallery-img ">
             <div className="mb-2 ">
           <h2 className="text-pink-600 text-3xl font-bold  text-center">| Brand Car Gallery</h2>
           <p className='text-blue-500'>Best Car are Available</p>
           </div>
          <div className="overflow-hidden h-full">
          {/* <Carousel slides={slides} autoplay={true} className="w-96 h-96 bg-red-500"  interval={5000}  /> */}

          <div    className='lg:h-96 h-24 md:h-48'   style={{ width: "100%",margin: "0 auto" }}
>
<Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          goToSlideDelay={this.state.goToSlideDelay}
        />
          </div>
         

  {/* <div>
    <ul>
    {
        slides.map(slide=><li>{slide}</li>)
    }
    </ul>
   
  </div> */}
          </div>
        </div>
    );
};
}

// export default CarGallery;