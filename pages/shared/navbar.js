import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useState } from "react";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState("aboutPage");
  //const closeMenu = () => setClick(false);
  const handleClick = (e) => {
    console.log(e.target.className);
    let item = e.target.className;
    setCurrent(item.trim());
    setClick(false);
  };

  return (
    <nav className="w-full  bg-blue-900 h-fit  border-b-2 border-[#2196f3] fixed top-0  z-50 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between  py-2 md:block cursor-pointer  ">
            <div className="page-logo">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                <img
                  src="/assets/icons/pageIco.png"
                  className="aboutPageIcon w-10"
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
              ? "transition-height duration-1000 ease-in-out  h-fit xl:pb-0 lg:pb-0 md:pb-0 sm:pb-10 pb-10 "
              : "  transition-height duration-1000 ease-in-out"
          }`}
        >
          <div
            className={`flex-1 justify-self-center   md:block md:pb-0 md:mt-0 xl:overflow-visible lg:overflow-visible md:overflow-visible sm:overflow-hidden overflow-hidden   ${
              navbar
                ? " transition-height duration-1000 ease-in-out portrait:h-64 portrait:mt-10 "
                : "transition-height duration-1000 ease-in-out h-0"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-base leading-3 -mt-3">
              <li
                className={` ${
                  current == "aboutPage" || current == "aboutPageIcon" ? "" : ""
                } text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold`}
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  className="aboutPage"
                >
                  About
                </Link>
              </li>
              <li
                className={` ${
                  current == "skillsPage" ? "" : ""
                } text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold`}
              >
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleClick}
                  className="skillsPage"
                >
                  Skills
                </Link>
              </li>
              <li
                className={` ${
                  current == "projectsPage" ? "" : ""
                } text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold`}
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleClick}
                  className="projectsPage"
                >
                  Projects
                </Link>
              </li>
              <li
                className={` ${
                  current == "contactPage" ? "" : ""
                } text-white portrait:hover:text-2xl hover-underline-animation  cursor-pointer px-2 rounded-md h-10 flex  items-center w-fit portrait:font-bold`}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleClick}
                  className="contactPage"
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
