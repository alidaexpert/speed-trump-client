import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';
import Loader from "react-loader-spinner";

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth()
    if(isLoading===true){
        return (<div className="flex justify-center p-36 items-center">
            <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
        </div>)}
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email || user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
              
            }}
          />
        )
      }
    />
    );
};
  

export default  (PrivateRoute);