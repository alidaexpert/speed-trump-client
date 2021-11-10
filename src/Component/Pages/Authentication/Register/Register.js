import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link,useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from "../../../images/logo/tourer.svg"
import useAuth from '../../../hooks/useAuth/useAuth';
const Register = () => {
  const {
    error,
    signInGoogle,
    inputPassword,
    inputEmail,
    signUp}=useAuth()
    const history=useHistory()
    const redirect_url= "/NewUser"
    const signUpWithEmail=e=>{
      signUp()
      .then(()=>{
        history.push(redirect_url)  })
e.preventDefault()
    }
    const signInGmail=()=>{
      signInGoogle()
      .then(()=>{
     history.push(redirect_url)
                })
    }
    return (
      <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <img src={logo} alt="" className="w-auto mx-auto h-12" />
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
               Sign in to your account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6"  onSubmit={signUpWithEmail}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                onBlur={inputEmail}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 my-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                onBlur={inputPassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3  my-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              {
                error&&<span className="text-red-500 block text-sm bg-blue-100 p-4 my-4">{error.slice(9,100)}</span>
              }
            </div>

          

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
             
              
            </div>
          </form>
          <button
              onClick={signInGmail}
                className="group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white border-black hover:bg-gray-100 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-indigo-500 group-hover:text-red-400" aria-hidden="true" />
                </span>
                Google Sign in
              </button>

        </div>
      </div>
        </div>
    );
};

export default Register;