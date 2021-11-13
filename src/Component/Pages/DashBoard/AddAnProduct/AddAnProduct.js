import React,{useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAnProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const [car,setCar]=useState({})
    const {equipment,features}=car
    useEffect(()=>{
        const url=`http://localhost:5000/cars/618eb0af1eae242def7f863c`
fetch(url)
.then(res=>res.json())
.then(data=>setCar(data))
    },[])
    const onSubmit = data => {
        reset()
        
         data.equipment=equipment
         data.features=features
         const addCar=data

         fetch("http://localhost:5000/cars",{
method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(addCar)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                toast("Product Has been added Successfully!")
            }
            
        })
    };


    return (
      <div>
          <h2 className=" bg-about  py-4 text-3xl  text-white">| Add Services</h2>
          <form className=" lg:p-20 p-10 flex flex-col space-y-4 justify-center" onSubmit={handleSubmit(onSubmit)}>

<input className="border-2 p-2 border-blue-900 rounded-md" placeholder="Name" {...register("name", { required: true, maxLength: 100 })} />
<textarea rows="10" cols="30" className="border-2 p-2 border-blue-900 rounded-md" placeholder="Description" {...register("description")} />

      <div className="lg:flex w-full gap-2">
      <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Photo URL" {...register("pic")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Brand" {...register("brand")} />
      </div>
        <div className="lg:flex w-full gap-2">
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Rating" {...register("rating")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Horsepower" {...register("horsepower")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Engine" {...register("engine")} />
        </div>
        <div className="lg:flex w-full gap-2">
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Status" {...register("status")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Fuel" {...register("fuel")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Color" {...register("color")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Door" {...register("door")} />
        </div>
      <div className="lg:flex w-full gap-2">
      <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="transmission" {...register("transmission")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="People Rating" {...register("peopleRating")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Economy" {...register("economy")} />
      </div>
       <div className="lg:flex w-full gap-2">
       <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Mileage" {...register("mileage")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Madeyear" {...register("madeyear")} />
        <input className="border-2 p-2 w-full border-blue-900 rounded-md" placeholder="Price" type="number" {...register("price", { required: true, maxLength: 11})} />
       </div>
      
        <input className="bg-indigo-900 text-white py-2 rounded-md" type="submit" />
        <ToastContainer/>
      </form>
              </div>
      
    );
};

export default AddAnProduct;