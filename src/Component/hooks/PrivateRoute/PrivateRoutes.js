import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

import useAuth from "../useAuth/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoutes = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const getUser = localStorage.getItem("idToken");
  if (isLoading === true) {
    <div className="flex justify-center p-36 items-center">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>;
  }
  if (user.email && user.displayName && getUser) {
    return <Outlet />;
  }
  if (!user.email && !user.displayName && !getUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  // if (window.location.reload && user.email) {
  //   <Navigate to={location.pathname} />;
  // }
};

export default PrivateRoutes;
