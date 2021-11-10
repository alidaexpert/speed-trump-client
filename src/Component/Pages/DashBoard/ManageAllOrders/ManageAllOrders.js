import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth/useAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageAllOrders = () => {
    const {logOut}=useAuth()
    const [orders,setOrders]=useState([])
    // const [status,setStatus]=useState('Pending')
    console.log(orders)
    useEffect(()=>{
        fetch("https://tour-express.herokuapp.com/booking")
        .then(res=>res.json())
        .then(data=>{
          
            setOrders(data)
        }
            )
    },[])
  
    const clickDelete=id=>{
        fetch(`https://tour-express.herokuapp.com/booking/${id}`,{
            method:"DELETE",
        })
       .then(response=>response.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                const remaining= orders.filter(order=>order._id!==id)
                setOrders(remaining)
                toast("Order Successfully Deleted!")

            }
        })
    }

const clickApproved=(id)=>{
    const updateStatus={status:"Approved"}
    fetch(`https://tour-express.herokuapp.com/booking/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateStatus)

    })
   .then(response=>response.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            // setStatus("Approved")
            toast("Offer Has been Update Successfully!")
            // history.push("/manage-orders")
}})
}
    return (
        <div>
             <ToastContainer/>
        <div className="lg:flex ">
        <div className="w-1/4 hidden lg:block space-y-4 p-10 text-left  bg-indigo-600 text-white ">
        <p className="text-3xl text-pink-400">DashBoard</p>
<Link to="/my-profile" className="hover:bg-indigo-700 p-2  block">
    <button>My Profile</button>
</Link>
<Link to="/my-order" className="hover:bg-indigo-700 p-2 block">
    <button>My Order</button>
</Link>
<Link to="/manage-orders" className="hover:bg-indigo-700 p-2 block">
    <button>Manage All Orders</button>
</Link>
<Link to="/add-services" className="hover:bg-indigo-700 p-2 block">
    <button>Add Services</button>
</Link>
<button onClick={logOut} className="hover:bg-indigo-700 p-2 w-full border-t-2 border-indigo-700 text-left" >Sign Out</button>
    </div>
            <div className="lg:w-3/4 bg-gray-100 lg:p-10 p-4">
            <h2 className="text-3xl text-red-500">| Manage All Offers</h2>
            <ul className="">
        {
            orders.map(order=><li key={order._id} className="lg:grid-cols-4 rounded-lg gap-4 grid grid-cols-2 text-left lg:space-y-0 space-y-4 justify-between items-center p-2 my-4 bg-white">
                
                <div className="relative flex justify-center">
                    <p className="text-xs text-center absolute bg-gray-900 bg-opacity-30 rounded-md  top-2/4 text-white">Package: <small>{order.packageBook}</small> </p>

<img src={order.photo} className="w-full rounded-lg h-24" alt="" />

    </div>
    <div>
<p className="text-xl font-medium">Name: <span className="text-pink-500">{order.name}</span></p>
<p><small className="font-medium text-yellow-600">{order.email}</small></p>
<small>{order.phone}</small>
    </div>
    <div>
        <h2 className="text-indigo-700 font-medium">Person</h2>
       <p> <small>Adult: {order.person}</small></p>
        <small>Children: {order.children}</small>
    </div>
    <div className=''>
<p className={order.status!=="Approved"?"text-red-500 font-medium":"text-green-700 font-medium"}>{order.status} </p>
<span className="flex gap-2 mt-2">
   
     <button onClick={()=>clickApproved(order._id)} className="bg-indigo-600 border-2 border-indigo-900 text-white px-2">Accept</button>

    <button onClick={()=>clickDelete(order._id)} className="border-2 text-red-600 px-2 border-pink-600 font-extrabold">X</button></span> 
    </div> 
            </li> )
        }
        
    </ul>
            </div>
        </div>
                </div>
    );
};

export default ManageAllOrders;