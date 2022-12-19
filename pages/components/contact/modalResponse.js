import Link from "next/link";
import React, { useEffect, useState } from "react";

//modal que permite eliminar los datos de los estudiantes
export default function ModalResponse(props) {
  const { display, active, icon, title, text } = props;
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (icon == "" && title == "" && text == "") {
      setDataLoaded(false);
    } else {
      setDataLoaded(true);
    }
  }, [icon, title, text]);
  return (
    <>
      {display ? (
        <div className=" w-full h-full absolute">
          <div className="fixed inset-0 z-20 overflow-y-auto">
            <div className="flex flex-col justify-center items-center min-h-screen">
              <div className=" xl:w-[30vw] lg:w-[40vw] md:w-[55vw] sm:w-[500px] w-[90vw] xl:h-[20vw] lg:h-[20vw]  md:h-[30vw] sm:h-[40vw] h-[45vw] relative  mx-auto bg-white rounded-xl shadow-2xl shadow-black">
                <div className=" sm:flex flex flex-col justify-center items-center pt-2 px-2 ">
                  <div className=" w-full  rounded-xl flex flex-row justify-end items-end">
                    <button
                      className=" h-10 w-10"
                      onClick={() => {
                        active(false);
                      }}
                    >
                      <img
                        src="assets/icons/circleClose.svg"
                        className=" w-full h-full"
                      ></img>
                    </button>
                  </div>
                  {!dataLoaded ? (
                    <div className=" w-full h-full flex flex-col justify-center items-center">
                      <div>
                        <img
                          src="assets/images/satellite.png"
                          className=" w- h-40"
                        ></img>
                      </div>
                      <div>
                        <p className=" text-[#072966] font-bold text-3xl">
                          Sending your message...
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className=" text-center sm:ml-4 sm:text-left px-5 flex flex-col justify-center items-center">
                      <img
                        src={icon}
                        className=" xl:w-32 lg:w-32 md:w-24 sm:w-24 w-20  "
                      ></img>
                      <h1 className=" text-5xl leading-relaxed text-[#061994] font-bold ">
                        {title}
                      </h1>
                      <p className=" whitespace-nowrap text-[#061994] text-3xl">
                        {text}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
