import Link from "next/link";
import React, { useState } from "react";
export default function Footer() {
  return (
    <div className=" w-full h-fit py-5 bg-[#1f3a8a] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols- justify-center items-center">
      <div className=" flex flex-row justify-center items-center">
        <img src="/assets/icons/pageIco.png"></img>
      </div>
      <div className=" flex flex-col justify-center items-center xl:mt-0 lg:mt-0 md:mt-0 sm:mt-5 mt-5">
        <p className=" text-white font-bold">
          Made with <span className=" text-[#2196f3]">NextJS</span> by Kevin
          Herrera López
        </p>
      </div>
    </div>
  );
}
