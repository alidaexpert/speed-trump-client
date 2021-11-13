import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth/useAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Rating } from 'react-simple-star-rating'

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user}=useAuth()
    const [rating, setRating] = useState(0) 
    const handleRating = (rate) => {
        setRating(rate)
      }

    const onSubmit = data => {
        reset()
        data.rating=rating
        data.pic=user.photoURL
          fetch("https://speed-trump-bd.herokuapp.com/reviews",{
method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                toast("Review Has been submit Successfully!")
            }
            
        }) 
    };

    return (
      <div>
          <h2 className=" bg-about  py-4 text-3xl  text-white">| Post Review</h2>
          <form className=" lg:p-20 p-10 flex flex-col space-y-4 justify-center" onSubmit={handleSubmit(onSubmit)}>

        <input className="border-2 p-2 border-blue-900 rounded-md" defaultValue={user.displayName} placeholder="Full Name" {...register("name", { required: true, maxLength: 100 })} />
        <textarea rows="5" cols="30" className="border-2 p-2 border-blue-900 rounded-md" placeholder="Description" {...register("description")} />
     
      <Rating onClick={handleRating} size={40} ratingValue={rating} /* Rating Props */ />
      
        <input className="bg-indigo-900 text-white py-2 rounded-md" type="submit" />
        <ToastContainer/>
      </form>
              </div>
      
    );
};

export default Review;