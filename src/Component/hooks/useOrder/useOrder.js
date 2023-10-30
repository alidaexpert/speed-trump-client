import React, { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders,setOrders]=useState([])
    

    useEffect(()=>{
        fetch("https://speed-trump-server.onrender.com/booking")
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        }
            )
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useOrder;