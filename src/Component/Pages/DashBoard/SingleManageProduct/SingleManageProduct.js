import React, { useEffect, useState,  } from 'react';
import {  faCar, faCheckCircle, faGasPump, faTachometerAlt,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleManageProduct = () => {
    const {id}=useParams()
    const [car,setCar]=useState({})
    const {name,description,price,features,equipment,pic,brand,rating,status,madeyear,mileage,fuel,engine,horsepower, peopleRating,economy,transmission,color,door}=car
    const [update,setupdate]=useState({})  
        const handleOnBlur=(e)=>{
            const field=e.target.name
            const value=e.target.value
            let newData={...update}
            newData[field]=value
            console.log(newData)
            setupdate(newData)
        }
    useEffect(()=>{
        const url=`https://speed-trump-bd.herokuapp.com/cars/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>setCar(data))
    },[id])

    const updateProduct=()=>{ 
        fetch(`https://speed-trump-bd.herokuapp.com/cars/update/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount===true){
                
                toast("Product Successfully Updated!")
            }
        })
    }
    const carFont=<FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
    const speedFont=<FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
    const engineFont=<FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
  
    return (
        <div className='bg-white'>
            <ToastContainer/>
        <div className="lg:flex  gap-4 lg:p-10 ">
            {/* tour package section  */}
          <div className="lg:w-3/4 bg-gray-50 p-4 rounded-lg">
          <div className="w-full">
           <img src={pic} alt="" className="w-full rounded-md mb-2 " />
           <input type="text" className="border-2 border-gray-600 p-2 bg-blue-200 w-full rounded-sm" name="pic" defaultValue={pic} onBlur={handleOnBlur} />
           </div>
            <div className="lg:flex justify-between p-4">
                <div className="text-left">
                <span className="text-3xl">Name </span><input defaultValue={name}  onBlur={handleOnBlur} name="name" className="border-2 bg-blue-200 border-gray-600 p-2 mb-2 text-3xl font-bold"/> <br />
                Made:
                <input className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2" defaultValue={madeyear} name="madeyear"  onBlur={handleOnBlur}/>
                </div>
                <div className="lg:text-right text-left">
            Rating:  <input className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2" defaultValue={rating}  name="rating" onBlur={handleOnBlur}/>
           <div>People 
           <input className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2" defaultValue={peopleRating} name="peopleRating"  onBlur={handleOnBlur}/>     </div>           </div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0  border-t-2 border-b-2 border-gray-500 p-4">
                <div className="flex lg:justify-center lg:border-r-2 border-gray-400 items-center gap-4">
                   <span className="text-4xl text-red-500"> {speedFont}</span>
                    <div>
                        <small className="text-blue-900 text-2xl font-medium">{economy} KMPL</small>
                    </div>
                </div>
                <div className="flex lg:justify-center lg:border-r-2 border-gray-400 items-center gap-4">
                   <span  className="text-4xl text-red-500"> {engineFont}</span>
                    <div>
                        <small className="text-blue-900 text-2xl uppercase font-medium">{fuel}</small>
                    </div>
                </div>
                <div className="flex lg:justify-center items-center gap-4">
                   <span  className="text-4xl text-red-500"> {carFont}</span>
                    <div>
                        <small className="text-blue-900 text-2xl font-medium">{mileage} </small>
                    </div>
                </div>
               
            </div>
            {/* infor mation section  */}
            <div className=" space-y-4">
               
                <div className="space-y-4 mt-4 text-justify">
                    <h2 className="text-left text-3xl font-bold">OverView</h2>
                    <p className=' text-base '>{description}</p>
                </div>
                <div className="space-y-4 text-justify">
                    <h2 className="text-left text-3xl font-bold">Features</h2>
                  <div className="lg:flex gap-4 justify-between text-lg">
                  <ul className="space-y-3 text-gray-700">{features?.map(list=>
                    <li key={list} ><span className="text-green-600">{checkFont}</span> {list}</li>
                    ).slice(0,6)}</ul>
                    <ul className="space-y-3 text-gray-700">{features?.map(list=>
                    <li key={list} ><span className="text-green-600">{checkFont}</span> {list}</li>
                    ).slice(6,12)}</ul>
                  </div>
                </div>
               
            </div>
            {/* comment section  */}
          
            <div>

            </div>
          </div>
          {/* booking section  */}
          <div className="lg:w-1/4 bg-gray-50 py-4 rounded-lg">
<div className="text-center ">
            <p className='text-2xl text-white font-bold p-5 bg-red-600'>${price}</p>
        </div>
<table className="w-full text-left rounded-xl border-2 uppercase font-bold ">
    
        
    
                 <tbody>
                 <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Brand</td>
                        <td className="border-2 p-4">{brand}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Stock Status</td>
                        <td className="border-2 p-4">{status}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Build Year</td>
                        <td className="border-2 p-4">{madeyear}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Mileage</td>
                        <td className="border-2 p-4">{mileage}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Fuel</td>
                        <td className="border-2 p-4">{fuel}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Engine</td>
                        <td className="border-2 p-4">{engine} cc</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Transmission</td>
                        <td className="border-2 p-4">{transmission}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Horsepower</td>
                        <td className="border-2 p-4">{horsepower} hp</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Color</td>
                        <td className="border-2 p-4">{color}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Door</td>
                        <td className="border-2 p-4">{door}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Equipment</td>
                        <td className=" border-2 p-4"><ul className=" space-y-2">{equipment?.map(list=><li  key={list}><span className="text-green-600">{checkFont} </span>{list}</li>)}</ul></td>
                    </tr>
                    
                 </tbody>
                </table>
                {/* purchase modal  */}
              
                <div>
              
                </div>
          </div>
          
        </div>
        <button  onClick={updateProduct} className="text-white w-3/4 my-4 bg-blue-600 font-bold py-3 px-5 ">Update</button>
        </div>
    );
};

export default SingleManageProduct;