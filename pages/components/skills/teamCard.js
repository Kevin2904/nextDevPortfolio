import Link from "next/link";
import React from "react";

export default function TeamCard(props) {
  const { company, work, page } = props;

  return (
    <div className=" w-[300px] h-[300px] bg-gradient-to-b from-[#2196f3] border-2 border-[#2196f3]  rounded-md relative overflow-hidden  ">
      <div className=" bg-white px-5 h-20 flex justify-start items-center">
        <h3 className=" text-[#1f3a8a] font-bold text-xl">
          {company != null ? company : ""}
        </h3>
      </div>
      <div className=" w-full h-full flex justify-center items-start pt-5 px-5  bg-gradient-to-t from-[#072966] ">
        <p className=" text-white">{work != null ? work : ""}</p>
      </div>
      <div className="absolute bottom-0 flex justify-center items-center w-full pb-5   left-0">
        <div className=" bg-white w-fit text-[#1f3a8a] font-bold rounded-full py-2 px-5 ">
          <Link href={page != null ? page : "/"} target="_blank">
            More information
          </Link>
        </div>
      </div>
    </div>
  );
}
