import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import "react-toastify/dist/ReactToastify.css";
const DashBoard = () => {
  const { admin, logOut } = useAuth();
  const [orders, setOrders] = useState([]);

  // const [status,setStatus]=useState('Pending')
  useEffect(() => {
    fetch("https://speed-trump-server.onrender.com/purchase")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);
  return (
    <div className="font-sans">
      <div className="lg:flex ">
        {/* common section for dashboard  */}
        <div className="lg:w-1/4 lg:block  space-y-4 p-10 text-left bg-about text-white ">
          <p className="text-3xl text-pink-400">DashBoard</p>
          <Link to="profile" className="hover:bg-pink-700 p-2  block">
            <button>My Profile</button>
          </Link>

          <Link to="my_order" className="hover:bg-pink-700 p-2 block">
            <button>My Order</button>
          </Link>
          <Link to="post_review" className="hover:bg-pink-700 p-2 block">
            <button>Post Review</button>
          </Link>
          <Link to="payment" className="hover:bg-pink-700 p-2 block">
            <button>Payment</button>
          </Link>
          {admin && (
            <div className="space-y-4">
              <Link to="make_admin" className="hover:bg-pink-700 p-2  block">
                <button>Make Admin</button>
              </Link>
              <Link
                to="manage_all_order"
                className="hover:bg-pink-700 p-2 block"
              >
                <button>Manage All Orders</button>
              </Link>
              <Link to="manage_product" className="hover:bg-pink-700 p-2 block">
                <button>Manage Product</button>
              </Link>
              <Link to="add_an_product" className="hover:bg-pink-700 p-2 block">
                <button>Add Services</button>
              </Link>
            </div>
          )}

          <button
            onClick={logOut}
            className="hover:bg-pink-700 p-2 w-full border-t-2 border-indigo-700 text-left"
          >
            Sign Out
          </button>
        </div>

        {/* Manage All Order section start  */}
        <div className="lg:w-3/4 bg-gray-100 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
