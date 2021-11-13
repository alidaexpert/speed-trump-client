import React, { useEffect, useState } from 'react';
import {Link,Route,Switch,useRouteMatch} from "react-router-dom"

import useAuth from "../../../hooks/useAuth/useAuth"
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from '../MyProfile/MyProfile';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddAnProduct from '../AddAnProduct/AddAnProduct';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import AdminRoute from '../../../hooks/AdminRoute/AdminRoute';
import ManageProduct from '../ManageProduct/ManageProduct';
const DashBoard = () => {
    const {url,path}=useRouteMatch()
    const {admin,logOut}=useAuth()
    const [orders,setOrders]=useState([])
    // const [status,setStatus]=useState('Pending')
    useEffect(()=>{
        fetch("https://speed-trump-bd.herokuapp.com/purchase")
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        }
            )
    },[orders])
  
    return (
        <div className="font-sans">
        <div className="lg:flex ">
        {/* common section for dashboard  */}
<div className="lg:w-1/4 lg:block  space-y-4 p-10 text-left bg-about text-white ">
        <p className="text-3xl text-pink-400">DashBoard</p>
<Link to={`${url}`} className="hover:bg-pink-700 p-2  block">
    <button>My Profile</button>
</Link>

<Link to={`${url}/my_order`} className="hover:bg-pink-700 p-2 block">
    <button>My Order</button>
</Link>
<Link to={`${url}/post_review`} className="hover:bg-pink-700 p-2 block">
    <button>Post Review</button>
</Link>
<Link to={`${url}/payment`} className="hover:bg-pink-700 p-2 block">
    <button>Payment</button>
</Link>

{
    admin && <div className="space-y-4">
        <Link to={`${url}/make_admin`} className="hover:bg-pink-700 p-2  block">
    <button>Make Admin</button>
</Link>
<Link to={`${url}/manage_all_order`} className="hover:bg-pink-700 p-2 block">
    <button>Manage All Orders</button>
</Link>
<Link to={`${url}/manage_product`} className="hover:bg-pink-700 p-2 block">
    <button>Manage Product</button>
</Link>
<Link to={`${url}/add_an_product`} className="hover:bg-pink-700 p-2 block">
    <button>Add Services</button>
</Link>
    </div>
}


<button onClick={logOut} className="hover:bg-pink-700 p-2 w-full border-t-2 border-indigo-700 text-left" >Sign Out</button>

    </div>
    {/* Manage All Order section start  */}
    <div className="lg:w-3/4 bg-gray-100 ">
 <Switch>
     <Route exact path={path}>
        <MyProfile></MyProfile>
     </Route>
     <Route path={`${path}/my_order`}>
        <MyOrder></MyOrder>
     </Route>
     <Route path={`${path}/post_review`}>
        <Review></Review>
     </Route>
     <Route path={`${path}/payment`}>
        <Pay></Pay>
     </Route>
     <AdminRoute path={`${path}/manage_all_order`}>
        <ManageAllOrders></ManageAllOrders>
     </AdminRoute>
     <AdminRoute path={`${path}/manage_product`}>
        <ManageProduct></ManageProduct>
     </AdminRoute>
     <AdminRoute path={`${path}/add_an_product`}>
        <AddAnProduct></AddAnProduct>
     </AdminRoute>
     <AdminRoute path={`${path}/make_admin`}>
        <MakeAdmin></MakeAdmin>
     </AdminRoute>
 </Switch>

        </div>
        </div>
                </div>
    );
};

export default DashBoard;