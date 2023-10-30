import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const AdminRoute = () => {
  const { user, admin, isLoading } = useAuth();
  // const Location = useLocation();
  // const navigate = useNavigate();

  if (isLoading === true) {
    return (
      <div className="flex justify-center p-36 items-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div> 
    );
  }

  if (user.email && admin ) return <Outlet />;
 
  // else  { return <h1 className=" mt-4 pt-4 text-4xl text-red-500">Hey, You are not Admin</h1> }
  // ) : (
  //   navigate({
  //     pathname: "/",
  //     state: { form: Location },
  //   })
  // );
};

export default AdminRoute;
