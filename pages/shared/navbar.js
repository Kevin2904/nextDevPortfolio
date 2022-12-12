import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <nav className="w-full  bg-blue-900   fixed top-0  z-50 shadow-lg shadow-blue-500/50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block cursor-pointer  ">
            <div className="page-logo">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <img
                  src="/assets/icons/pageIco.png"
                  className="xl:py-0 lg:py-0 md:py-0 sm:py-2 py-2"
                ></img>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className={` ${
                  navbar
                    ? "animate-waving-hand ease-in-out"
                    : " ease-in-out duration-300"
                } p-2 text-gray-700  outline-none focus:border-gray-400 focus:border nav-button  bg-[#2196f3] hover:bg-[#1d80d0] rounded-full `}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={` ${
            navbar
              ? "transition-height duration-1000 ease-in-out  h-fit portrait:pb-10 "
              : "  transition-height duration-1000 ease-in-out"
          }`}
        >
          <div
            className={`flex-1 justify-self-center   md:block md:pb-0 md:mt-0 portrait:overflow-hidden   ${
              navbar
                ? " transition-height duration-1000 ease-in-out portrait:h-64 "
                : "transition-height duration-1000 ease-in-out h-0"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg">
              <li className="text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
//poner como links los id de cada seccion

//https://stackoverflow.com/questions/68589788/nextjs-link-to-scroll-to-a-section-in-same-page

//https://anuraghazra.dev/#creative-coding

//animate-bounce

/*

 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg ">
              <li className="text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="text-white portrait:hover:text-2xl hover-underline-animation cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
*/
