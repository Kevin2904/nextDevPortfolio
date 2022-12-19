import Link from "next/link";
import React, { useState } from "react";
export default function SideMedia(props) {
  return (
    <div className="icon-bar bg-white py-2 px-2 rounded-md relative z-50">
      <Link href="#" className="mb-2">
        <img
          src="assets/icons/github.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
      <Link href="#" className="mb-2">
        <img
          src="assets/icons/twitter.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
      <Link href="#" className="">
        <img
          src="assets/icons/linkedin.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
    </div>
  );
}
