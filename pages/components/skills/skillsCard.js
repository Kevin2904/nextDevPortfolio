import React, { useEffect, useState } from "react";

export default function SkillsCard(props) {
  const { content } = props;
  const [isRotated, setIsRotated] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);
  }, []);
  const onRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <div
        className={`${
          isRotated ? "rotated" : ""
        } card relative h-[450px] xl:w-full lg:w-full md:w-[400px] sm:w-[300px] w-[300px]`}
      >
        <div
          className={` front bg-gradient-to-b from-[#2196f3] border-2 border-[#2196f3]  w-full h-[450px] rounded-md flex pb-10 justify-start items-center flex-col absolute `}
        >
          <div className="  absolute w-full">
            <div className=" flex flex-col w-full justify-center items-center bg-white py-5 ">
              <img src={data[0]?.icon} className=" w-20 h-20"></img>
              <h2 className=" text-[#1f3a8a] font-bold text-xl">
                {data[0]?.title}
              </h2>
            </div>

            <div className="text-white flex w-full flex-col text-left px-10 mt-5">
              <p className=" text-sm">{data[0]?.front[0]?.text}</p>
              <p className="  text-lg font-bold mt-5">Experience: </p>

              <ul>
                {data[0]?.front[0]?.experience?.map((resp, i) => {
                  return (
                    <li key={i}>
                      <p className=" text-sm">{resp}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <button
            className=" w-32 text-left px-5 h-10 bg-white text-[#072966] mb-5 rounded-full  font-bold absolute bottom-0"
            onClick={onRotate}
          >
            Stack
            <img
              src="assets/icons/arrow.svg"
              className=" float-right  w-7"
            ></img>
          </button>
        </div>

        <div
          className={` back bg-gradient-to-b from-[#2196f3] border-2 border-[#2196f3]  w-full h-[450px] rounded-md flex pb-10 justify-start items-center flex-col absolute `}
        >
          <div className="  absolute w-full ">
            <div className=" flex flex-col w-full justify-center items-center h-14 bg-white">
              <h2 className=" text-[#1f3a8a] font-bold text-xl">Stack</h2>
              <p></p>
            </div>

            <div className="text-white flex w-full flex-col text-left px-10 mt-5">
              <ul>
                {data[0]?.back?.map((resp, i) => {
                  return (
                    <li key={i}>
                      <p className=" text-sm">{resp}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className=" absolute bottom-0 w-full">
            <div className=" w-full flex justify-center items-center bg-white">
              <button
                className=" w-32 text-left px-5 h-10 bg-white mb-5 rounded-full text-[#072966] font-bold absolute bottom-0"
                onClick={onRotate}
              >
                Back
                <img
                  src="assets/icons/arrow.svg"
                  className=" float-right  w-7"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
