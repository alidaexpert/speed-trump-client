import { faClock } from '@fortawesome/free-regular-svg-icons';
import {  faCar, faCheckCircle, faGasPump, faTachometerAlt,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router';
import {Rating } from 'react-simple-star-rating'
import useAuth from '../../hooks/useAuth/useAuth';
import './SingleCarExplore.css'
import { Dialog, Transition } from '@headlessui/react'
import { apiEndpoint } from '../../hooks/apiEndpoint/apiEndpoint';
const SingleCarExplore = () => {
    const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
    const {id}=useParams()
    const {user,admin}=useAuth()
    const [car,setCar]=useState({})
    const {name,description,price,features,equipment,pic,brand,rating,status,madeyear,mileage,fuel,engine,horsepower, peopleRating,economy,transmission,color,door}=car
    // const [booking,setBooking]=useState({})
    const history=useNavigate()
    const phoneRef=useRef()
    const userNameRef=useRef()
    const dateRef=useRef()
    const paymentViaRef=useRef()
    const paymentNumRef=useRef()
    useEffect(()=>{
        const url=`${apiEndpoint}/cars/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>setCar(data))
    },[id])

    const handledEdit=()=>{
      history(`/manage_product/${id}`)
    }

    const bookPackage=(e)=>{
const userName=user.displayName===null ? userNameRef.current.value : user.displayName
const email=user.email
const carName=name
const phone=phoneRef.current.value
const date=dateRef.current.value
const paymentVia=paymentViaRef.current.value
const paymentNum=paymentNumRef.current.value
        const book={
userName,email,phone,date,carName,pic,paymentVia,paymentNum,status:"Pending"
        }
        fetch(`${apiEndpoint}/purchase`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(book)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                history("/purchase_done", {replace:true})
            }
        })
        phoneRef.current.value=""
        dateRef.current.value=""
        paymentViaRef.current.value="Payment"
        paymentNumRef.current.value=""
e.preventDefault()
    }
    const carFont=<FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
    const clockFont=<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const speedFont=<FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
    const engineFont=<FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
  
    return (
        <div className='bg-white'>
        <div className="lg:flex  gap-4 lg:p-10 ">
            {/* tour package section  */}
          <div className="lg:w-3/4 bg-gray-50 p-4 rounded-lg">
          { user.email && admin && <button onClick={handledEdit} className="block w-full border border-2 border-green-900 text-3xl text-white bg-green-700 px-6 py-1 rounded-md font-bold">Edit</button>}
          <div className="w-full mt-4">
           <img src={pic} alt="" className="w-full rounded-md " />
           </div>
         
          
            <div className="lg:flex justify-between p-4">
              
                <div className="text-left">
                <h2 className="text-3xl font-bold">{name}</h2>
                <h4 className="text-gray-500"><span className="text-red-500">{clockFont}</span> {madeyear}</h4>
                </div>
                <div className="lg:text-right text-left">
                    <p className="text-sm font-medium text-blue-900">{rating}</p>
                
                < Rating SVGclassName={'diplay: inline-block'}  readonly size={16}  
  initialValue={rating} /* Rating Props */ />
                <p className="text-sm font-medium text-blue-900">{peopleRating} Review</p>
                </div>
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
                <button  onClick={() => setOpen(true)} className="text-white bg-blue-600 font-bold py-3 px-5 w-full">Book This Car</button>
                <div>
                <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 rounded-xl p-4 lg:mt-0 mt-4 text-left space-y-4">
                <h1 className="text-3xl my-2">Book This Car</h1>
              <form className="space-y-4" onSubmit={bookPackage}>
              <input className="p-4 w-full border-2 border-gray-200   rounded-md block" type="text" defaultValue={user.displayName} ref={userNameRef} required name="" id="" placeholder=" Full Name" />
                <input type="number" ref={phoneRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder=" Phone" />
                <input className="p-4 w-full border-2 border-gray-200   rounded-md block" type="text" defaultValue={name} required name="" id="" placeholder=" Model" />
                <input type="date" ref={dateRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder="11/23/2021" />
               <div className="flex gap-3">
               <select ref={paymentViaRef} required className="p-4 w-full border-2 border-gray-200 rounded-md block" >
                    <option value="PaymentVia">
Payment Via
                    </option>
                    <option value="bKash">
bKash
                    </option>
                    <option value="DBBL">
DBBL
                    </option>
                    <option value="Bank">
Bank
                    </option>
                    <option value="Master/Visa Card">
Master/Visa Card
                    </option>
                </select>
                 <input className="p-4 w-full border-2 border-gray-200   rounded-md block" type="text" ref={paymentNumRef} required name="" id="" placeholder="Payment Num" />
               </div>
               
                <input type="submit" className="py-4 w-full px-4 rounded-md bg-green-900 text-white" value="Book Now" />
              </form>
            </div> 
              <div className="bg-gray-50  px-4 py-3 sm:px-6 w-full text-center">
               
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
                </div>
          </div>
        </div>
          <div className='flex lg:p-4 justify-center'>
          <div className="bg-gray-50 rounded-xl lg:w-3/4 w-full p-4 mt-4 text-left space-y-4">
          <h1 className="text-3xl my-2">Leave Your Comment</h1>
          <div className="flex  gap-4">
          <input className="p-4 w-full border-2 border-gray-200  rounded-md block" type="text" name="" id="" placeholder="Your Full Name" />
          <input type="email" className="p-4 w-full border-2 border-gray-200 rounded-md block" name="" id="" placeholder="Your Email" />
          </div>
          <input type="text" className="p-4 w-full border-2 border-gray-200  rounded-md block" name="" id="" placeholder="Tour Type" />
          <textarea name="" className="p-4 w-full border-2 border-gray-200 rounded-md block" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
          <p> Rate our website <br />
         
          < Rating SVGclassName={'diplay: inline-block'}  size={20}  
  initialValue={0} /* Rating Props */ />
          <br />
          </p>
        <div className="text-center">
        
          <input type="submit" className="py-3 px-4 lg:w-2/4 w-full rounded-md bg-red-600 text-white" value="Submit" />
        </div>
      </div>
          </div>
        </div>
    );
};

export default SingleCarExplore;