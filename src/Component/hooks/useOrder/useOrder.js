import React, { useEffect, useState } from 'react';
import { apiEndpoint } from '../apiEndpoint/apiEndpoint';

const useOrder = () => {
    const [orders,setOrders]=useState([])
    

    useEffect(()=>{
        fetch(`${apiEndpoint}/booking`)
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