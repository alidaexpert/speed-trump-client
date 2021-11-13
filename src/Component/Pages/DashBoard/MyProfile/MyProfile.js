import React from 'react';
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth/useAuth"
import bg from '../../../../images/banner/01.jpg'
const MyProfile = () => {
    const {logOut,user}=useAuth()

    return (
        <div>
        {/* common section for dashboard  */}

            <h2 className="text-3xl  p-4 bg-black  text-pink-700">| My Profile</h2>
<div className="flex justify-center py-8" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no repeat',backgroundColor:'rgba(0, 10, 41,0.7)',backgroundBlendMode:'darken,overlay'}}>
{
                       user.photoURL ? <img
                       className="h-52 w-52 rounded-full"
                       src={user.photoURL}
                       alt=""
                     /> :<img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="" className="h-52 w-52 rounded-full" />
                     }
   
</div>
<div className=" bg-black p-4">
<table className="border-2  w-full ">
{
                       user.displayName ? <tr><td className="border-2 border-pink-600 p-4  text-pink-500 text-2xl w-2/4  my-2">Name:</td>
                       <td className="border-2 border-pink-600  p-4  w-2/4 text-white">{user.displayName}</td>
                       </tr> :<tr className=""> <td className="border-2 border-pink-600  text-pink-500 text-2xl w-2/4  p-4   my-2">Name: </td>
                       <td className="border-2 border-pink-600 w-2/4  p-4  text-white">Avatar</td>
                       </tr>
                     }
{
                       user.email ?<tr><td className="border-2 border-pink-600  p-4  text-pink-500 text-2xl w-2/4  my-2">Email:</td>
                       <td className="border-2 border-pink-600 p-4 w-2/4 text-white">{user.email}</td>
                       </tr> :<tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Email:</td>
                       <td className="border-2 border-pink-600  p-4  w-2/4 text-white">N/A</td>
                       </tr>
                     }
<tr><td className="border-2  p-4 border-pink-600  text-pink-500 text-2xl w-2/4  my-2">Id Created:</td>
                       <td className="border-2 border-pink-600 p-4 w-2/4 text-white">{user.metadata.creationTime}</td>
                       </tr> 
                      

                      {user.phoneNumber? <tr><td className="border-2 border-pink-600 p-4  text-pink-500 text-2xl w-2/4  my-2">Phone:</td>
                       <td className="border-2 border-pink-600 p-4 w-2/4 text-white">{user.phoneNumber}</td>
                       </tr> :
                     <tr><td className="border-2 border-pink-600  p-4  text-pink-500 text-2xl w-2/4  my-2">Phone:</td>
                     <td className="border-2 border-pink-600 p-4 w-2/4 text-white">N/A</td>
                     </tr>  }

                     
</table>
<div className="mt-4">
<Link to="/update-profile">
<button className="py-2 px-4 border border-pink-600 hover:bg-gray-800 hover:text-pink-600 text-white bg-pink-600">Update Your Profile</button>
</Link> 
<button  className="py-2 px-4 border border-pink-600 hover:border-pink-300 hover:bg-pink-600 text-white bg-gray-900" onClick={logOut}>Log Out</button>
</div>
</div>
                </div>
    );
};

export default MyProfile;