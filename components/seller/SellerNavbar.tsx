
"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import avatar from './img/Group 8926.svg';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="sticky hero-section top-0 bg-opacity-95 z-50 p-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto my-5 px-9 ">
        <a href="/" className="flex items-center">
          <h1>Logo</h1>
          {/* <img src={Logo} className="h-14 mr-3" alt="Logo" /> */}
        </a>
        <div className="flex md:order-2 ">
          <div className="flex ">
            {/* <img src="" alt="" className="mb-2" />
            <img src="" alt="" className="ml-6" /> */}

          </div>
          <div className="lg:block hidden self-center">
            <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">

              <Link
                href="/profile"
                className="flex justify-between items-center align-middle"
              >
                {/* <BiUser size={30} />{" "} */}
                <Link
                  href="/profile"
                  className="flex justify-between items-center align-middle"
                >
                  <span className="pl-2">SHIBIL</span>
                  {/* <BiUser size={30} />{" "} */}
                  <Image src={avatar} alt={''} className='' />

                </Link>
              </Link>

            </a>

          </div>

          {/* <button
            type="button"
            onClick={toggleMobileMenu} // Call the toggle function on button click
            className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"} // Set aria-expanded based on the state
          >
            
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
          <Link
            href="/profile"
            className="flex justify-between items-center align-middle"
          >
            <span className="pl-2 block lg:hidden">SHIBIL</span>
            {/* <BiUser size={30} />{" "} */}
            <Image src={avatar} alt={''} className='block lg:hidden' width={35} />

          </Link>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold bg-opacity-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0 "
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0 "
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0 "
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar