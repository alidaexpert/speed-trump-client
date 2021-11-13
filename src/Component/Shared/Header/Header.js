import React from 'react';
import {Link} from "react-router-dom"
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useAuth from '../../hooks/useAuth/useAuth';
import logo from '../../../images/logo/f (1).svg'
import './Header.css'

const Header = () => {

    const {user,logOut}=useAuth()
    const navigation = [
        {id:1, name: 'Home', to: '/', current: true },
        {id:2, name: 'Explore', to: '/cars', current: false },
        {id:3, name: 'Car Gallery', to: '/car_gallery', current: false },
        {id:4, name: 'About', to: '/about_us', current: false },
        {id:5, name: 'Contact', to: '/contact_us', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
        <div className=''>
    <Disclosure as="nav" className="bg-header-img">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <div className="block lg:hidden w-auto">
                 <img src={logo} alt="" className="w-10" />
                  </div>
                  
                  <div className="hidden lg:block w-auto">
                  <h3 className="text-white flex gap-2 text-2xl">
                        <img src={logo} alt="" className="w-10" />
                      
                         Speed Trump
                        </h3>
                  </div>
                 
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Profile dropdown */}
              {
                  user.email ||user.displayName ?<div>
                        <Menu as="div" className="ml-3 z-30 relative">
                  <div className="flex justify-center items-center gap-3">
                  <span className="text-pink-500 lg:block hidden">{user.displayName}</span>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      
                     {
                       user.photoURL? <img
                       className="h-8 w-8 rounded-full"
                       src={user.photoURL}
                       alt=""
                     /> :<img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="" className="h-8 w-8 rounded-full" />
                     }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg overflow-hidden bg-menu text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/dashboard"   className={classNames(active ? 'bg-blue-900' : '', 'block px-4 py-2 text-sm ')}
                          >
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
        
                          <button onClick={logOut} className='border-t-2 hover:text-gray-100 w-full font-bold hover:bg-blue-800 px-4 py-2 text-sm '
                          >
                            Sign out
                          </button>
                        
                    
                    </Menu.Items>
                  </Transition>
                </Menu>
                  </div> :
                  <div>
                      <Link to="/login">
                      <button  className='bg-gray-900  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >Login</button>
                      </Link>
                  </div>
              }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
        </div>
    );
};

export default Header;