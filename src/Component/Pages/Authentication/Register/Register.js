import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link,useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth/useAuth';
import logo from "../../../../images/logo/f.svg"
const Register = () => {
  const {
    error,
    signInGoogle,
    signUp}=useAuth()

const [loginData,setLoginData]=useState({})
    const history=useHistory()
    const redirect_url= "/new_user"

const handleOnChange=e=>{
  const field=e.target.name
  const value=e.target.value
  const newLoginData={...loginData}
  newLoginData[field]=value
  setLoginData(newLoginData)
}

const handleLoginSubmit=e=>{
if(loginData.password!==loginData.password2){
  alert('Your password didnt match. Please retype your password carefully.')
  return
}
signUp(loginData.email,loginData.password,loginData.name,loginData.profile)
.then(()=>{
          history.replace(redirect_url)  })
  e.preventDefault()
}



    const signInGmail=()=>{
      signInGoogle()
      .then(()=>{
     history.replace(redirect_url)
                })
    }
    return (
      <div>
      <div className="min-h-full bg-about flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <img src={logo} alt="" className="w-auto mx-auto h-12" />
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Create a new account</h2>
            <p className="mt-2 text-center text-sm text-gray-200">
              Or{' '}
              <Link to="/login" className="font-medium text-pink-600 hover:text-yellow-400">
               Sign in to your account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6"  onSubmit={handleLoginSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                onBlur={handleOnChange}
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 font-bold my-2 rounded-md focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                onBlur={handleOnChange}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 font-bold my-2 rounded-md focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="profile" className="sr-only">
                  profile
                </label>
                <input
                onBlur={handleOnChange}
                  id="profile"
                  name="profile"
                  type="profile"
                  autoComplete="profile"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 font-bold my-2 rounded-md focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:z-10 sm:text-sm"
                  placeholder="Profile Pic URL"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                 onBlur={handleOnChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 font-bold my-2 rounded-md focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Retype Password
                </label>
                <input
                onBlur={handleOnChange}
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 font-bold my-2 rounded-md focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:z-10 sm:text-sm"
                  placeholder="Retype Password"
                />
              </div>
              {
                error&&<span className="text-white rounded-lg block text-sm bg-red-400 p-3 my-4">{error.slice(9,100)}</span>
              }
            </div>

          

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-pink-200 group-hover:text-blue-700" aria-hidden="true" />
                </span>
                Sign Up
              </button>
             
              
            </div>
          </form>
          <button
              onClick={signInGmail}
                className="group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-pink-600  font-bold bg-white border-pink-600 hover:bg-gray-100 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-pink-500 font-bold group-hover:text-pink-700" aria-hidden="true" />
                </span>
                Google Sign in
              </button>

        </div>
      </div>
        </div>
    );
};

export default Register;