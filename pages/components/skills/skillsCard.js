import React, { useState } from "react";
import SkillsSliderContent from "./skillsSliderContent";

export default function SkillsCard() {
  const [isRotated, setIsRotated] = useState(false);
  const onRotate = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className={`${isRotated ? "rotated" : ""} card relative`}>
      <div
        className={` front bg-[#1f3a8a] w-full h-[450px] rounded-md flex pb-10 justify-start items-center flex-col absolute `}
      >
        <div className="  absolute">
          <div className=" flex flex-col w-full justify-center items-center bg-white py-5">
            <img src="assets/icons/frontEnd.svg" className=" w-20 h-20"></img>
            <h2 className=" text-[#1f3a8a] font-bold text-xl">Front-end</h2>
          </div>

          <div className="text-white flex w-full flex-col text-left px-10 mt-5">
            <p>
              Application development ensuring intuitive and responsive
              interfaces.
            </p>
            <p className="  text-lg font-bold mt-5">Experience: </p>

            <ul>
              <li>
                <p>Websites developed according to client requirements.</p>
              </li>
              <li>
                <p>Bug fixing and development of new functionalities.</p>
              </li>
            </ul>
          </div>
        </div>

        <button
          className=" w-32 text-left px-5 h-10 bg-[#2196f3] mb-5 rounded-full text-white absolute bottom-0"
          onClick={onRotate}
        >
          Details
          <img src="assets/icons/arrow.svg" className=" float-right  w-7"></img>
        </button>
      </div>

      <div
        className={` back bg-[#1f3a8a] w-full h-[450px] rounded-md flex pb-10 justify-start items-center flex-col absolute `}
      >
        <div className="  absolute w-full ">
          <div className=" flex flex-col w-full justify-center items-center h-14 bg-white">
            <h2 className=" text-[#1f3a8a] font-bold text-xl">Stack</h2>
            <p></p>
          </div>

          <div className="text-white flex w-full flex-col text-left px-10 mt-5">
            <ul>
              <li>
                <p>ReactJS</p>
              </li>
              <li>
                <p>NextJS</p>
              </li>
              <li>
                <p>Angular</p>
              </li>
              <li>
                <p>.NET Core 6 (MVC)</p>
              </li>
              <li>
                <p>Tailwind</p>
              </li>
              <li>
                <p>Bootstrap</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" absolute bottom-0 w-full">
          <div className=" w-full flex justify-center items-center bg-white">
            <button
              className=" w-32 text-left px-5 h-10 bg-[#2196f3] mb-5 rounded-full text-white absolute bottom-0"
              onClick={onRotate}
            >
              Back
              <img
                src="assets/icons/arrow.svg"
                className=" float-right  w-7"
              ></img>
            </button>
          </div>
          <img src="assets/images/cardWave2.svg" className=" w-full"></img>
        </div>
      </div>
    </div>
  );
}
