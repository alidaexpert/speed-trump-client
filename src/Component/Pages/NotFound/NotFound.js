import React from 'react';
import { Link } from 'react-router-dom';
import page404 from "../../../images/404/Image_0.png"
const NotFound = () => {
    return (
        <div className="flex justify-center relative">
<img src={page404} className="w-full" alt="" />
<Link to="/" className="absolute top-3/4 bg-blue-900 hover:bg-indigo-900 transition-colors text-white py-2 px-4 rounded-3xl"><button>Go Back Homepage</button></Link>
        </div>
    );
};

export default NotFound;