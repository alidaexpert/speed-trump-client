import React,{useEffect, useState,Fragment, useRef} from 'react';
import useAuth from "../../../hooks/useAuth/useAuth"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = () => {
    const {user,logOut}=useAuth()
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

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

    const clickDelete=id=>{
        fetch(`https://speed-trump-bd.herokuapp.com/purchase/${id}`,{
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
    return (
        <div className="lg:p-10 p-4">
                                 <ToastContainer/>
    <h2 className="text-3xl text-red-500">| My order</h2>
    <ul className="">
        {
            orders.map(order=><li key={order._id} className=" rounded-lg gap-4 grid lg:grid-cols-4  grid-cols-2  lg:space-y-0 space-y-4 justify-center items-center p-2 my-4 bg-white">
<img src={order.pic} className="w-full rounded-lg h-24" alt="" />
<p className="text-xl flex-col  font-sans flex">Model: <small className="text-pink-600">{order.carName}</small> </p>
<p className="text-xl flex-col flex">Issue Date: <small>{order.date}</small> </p>

<div className="flex gap-4 items-center">
<p className={order.status!=="Approved"?"text-red-500 font-sans font-medium":"text-green-700 font-medium"}>{order.status}</p>
<button onClick={()=>setOpen(true)} className="border-2 text-red-600 px-2 border-pink-600 font-extrabold">X</button>
</div>
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

            </li> )
        }
        
    </ul>

  
        </div>
    );
};

export default MyOrder;