import React, { useEffect, useState,Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageAllOrders = () => {
    const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
    const [orders,setOrders]=useState([])
    // const [status,setStatus]=useState('Pending')
    useEffect(()=>{
        fetch("http://localhost:5000/purchase")
        .then(res=>res.json())
        .then(data=>{
          
            setOrders(data)
        }
            )
    },[orders])
  
    const clickDelete=id=>{
        fetch(`http://localhost:5000/purchase/${id}`,{
            method:"DELETE",
        })
       .then(response=>response.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remaining= orders.filter(order=>order._id!==id)
                setOrders(remaining)
                toast("Order Successfully Deleted!")

            }
        })
    }

const clickApproved=(id)=>{
    const updateStatus={status:"Approved"}
    fetch(`http://localhost:5000/purchase/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateStatus)

    })
   .then(response=>response.json())
    .then(data=>{
        if(data.modifiedCount>0){
            // setStatus("Approved")
            toast("Order Has been Update Successfully!")
            // history.push("/manage-orders")
}})
}
    return (
      <div className="lg:p-10 p-4">
                     <ToastContainer/>
            <h2 className="text-3xl text-red-500">| Manage All Offers</h2>
            <ul className="">
        {
            orders.map(order=><li key={order._id} className="lg:grid-cols-4 rounded-lg gap-4 grid grid-cols-2 text-left lg:space-y-0 space-y-4 justify-between items-center p-2 my-4 bg-white">
                
                <div className="relative flex justify-center">
                    <p className="text-xs text-center absolute bg-gray-900 bg-opacity-30 rounded-md  top-2/4 text-white">Model: <small>{order.carName}</small> </p>

<img src={order.pic} className="w-full rounded-lg h-24" alt="" />

    </div>
    <div>
<p className="text-xl font-medium">Name: <span className="text-pink-500">{order.userName}</span></p>
<p><small className="font-medium text-yellow-600">{order.email}</small></p>
<small>{order.phone}</small>
    </div>
    <div>
        <h2 className="text-indigo-700  font-medium">Payment</h2>
       <p> <small className="">{order.paymentVia} : {order.paymentNum}</small></p>
    </div>
    <div className=''>
<p className={order.status!=="Approved"?"text-red-500 font-medium":"text-green-700 font-medium"}>{order.status} </p>
<span className="flex gap-2 mt-2">
   
     <button onClick={()=>clickApproved(order._id)} className="bg-indigo-600 border-2 border-indigo-900 text-white px-2">Accept</button>

    <button onClick={()=>setOpen(true)} className="border-2 text-red-600 px-2 border-pink-600 font-extrabold">X</button></span> 

    {/* delete modal  */}
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
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Delete Order
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this order? It will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={()=>clickDelete(order._id)}
                >
                 Delete
                </button>
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
            </li> )
        }
        
    </ul>
            </div>
    );
};

export default ManageAllOrders;