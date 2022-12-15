import Link from "next/link";
import React, { useState } from "react";
export default function Splash() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#02072f]   flex flex-col items-center justify-center">
        <div className=" flex flex-col border-4 border-white bg-[#1f3a8a] pb-5 p-5 relative">
          <div class="dots-bars-7 border-white"></div>
        </div>
        <p className=" mt-5 text-2xl font-bold text-white">Loading...</p>
      </div>
    </>
  );
}
