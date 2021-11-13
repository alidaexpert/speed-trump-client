import {useState,useEffect} from 'react';

const useCars = () => {
    const [cars,setCars]=useState([])
    const [page,setPage]=useState(0)
    const [pagination,setPagination]=useState(0);
    const size=6
useEffect(()=>{
    fetch(`http://localhost:5000/cars?page=${page}&size=${size}`)
    .then(res=>res.json())
    .then(data=>{
        setCars(data.products)
        const count=data.count
        const pageCount=Math.ceil(count/size);
        setPagination(pageCount)
    })
},[page,size])
    return {
        cars,
        setPage,
        page,
        pagination
    };
};

export default useCars;