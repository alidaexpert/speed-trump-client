import React,{useEffect, useState} from 'react';
import useAuth from "../../../hooks/useAuth/useAuth"
const MyOrder = () => {
    const {user,logOut}=useAuth()
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch(`https://speed-trump-bd.herokuapp.com/myorder/${user.email}`,{
            headers:{
                "authorization":`Bearer ${localStorage.getItem("idToken")}`
            }
        })
        .then(res=>{
            if(res.status===200){
                return res.json()
            }
            else if(res.status=== 401){
                logOut()
            }
        })
        .then(data=>setOrders(data))
    },[user.email,logOut])
    return (
        <div className="lg:p-10 p-4">
    <h2 className="text-3xl text-red-500">| My order</h2>
    <ul className="">
        {
            orders.map(order=><li key={order._id} className=" rounded-lg gap-4 grid lg:grid-cols-4  grid-cols-2  lg:space-y-0 space-y-4 justify-center items-center p-2 my-4 bg-white">
<img src={order.pic} className="w-full rounded-lg h-24" alt="" />
<p className="text-xl flex-col  font-sans flex">Model: <small className="text-pink-600">{order.carName}</small> </p>
<p className="text-xl flex-col flex">Issue Date: <small>{order.date}</small> </p>

<p className={order.status!=="Approved"?"text-red-500 font-sans font-medium":"text-green-700 font-medium"}>{order.status}</p>

            </li> )
        }
        
    </ul>
        </div>
    );
};

export default MyOrder;