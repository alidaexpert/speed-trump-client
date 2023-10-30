import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

import useAuth from "../useAuth/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const AnonymousRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading === true) {
    <div className="flex justify-center p-36 items-center">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>;
  }

  if (user.email && user.displayName) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  if (!user.email && !user.displayName) {
    return <Outlet />;
  }
};

export default AnonymousRoute;
