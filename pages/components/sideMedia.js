import Link from "next/link";
import React, { useState } from "react";
export default function SideMedia(props) {
  return (
    <div className="icon-bar bg-white py-2 px-2 rounded-md relative z-50 xl:block lg:block md:block sm:hidden hidden">
      <Link
        href="https://github.com/Kevin2904/nextDevPortfolio"
        className="mb-2"
        target="_blank"
      >
        <img
          src="assets/icons/github.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
      <Link
        href="https://twitter.com/KevinHerreraL"
        className="mb-2"
        target="_blank"
      >
        <img
          src="assets/icons/twitter.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kevin-herrera-l%C3%B3pez/"
        className=""
        target="_blank"
      >
        <img
          src="assets/icons/linkedin.png"
          className=" w-10 h-10 animate-waving-hand ease-in-out"
        />
      </Link>
    </div>
  );
}
