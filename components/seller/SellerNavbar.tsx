import React from 'react'
import Link from 'next/link';
import avatar from './img/Group 8926.svg';
import Image from 'next/image';

const Navbar = () => {

  return (
    <nav className=" hero-section top-0 bg-opacity-95 z-50 p-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between my-5 container">
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
                  className="flex justify-between items-center align-middle gap-3"
                >
                  <span className="pl-2">SHIBIL</span>
                  {/* <BiUser size={30} />{" "} */}
                  <Image src={avatar} alt={''} className='' width={35} />

                </Link>
              </Link>

            </a>

          </div>


          <Link
            href="/profile"
            className="flex justify-between items-center align-middle"
          >
            <span className="pl-2 block lg:hidden">SHIBIL</span>
            {/* <BiUser size={30} />{" "} */}
            <Image src={avatar} alt={''} className='block lg:hidden' width={30} />

          </Link>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 hidden
            `}
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
                Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0 "
              >
               Wallet
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-text-color rounded hover:bg-primary md:hover:bg-transparent md:hover:text-[#3669C9] md:p-0 "
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar