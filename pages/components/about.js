import Link from "next/link";
import React, { useState } from "react";
export default function About() {
  const [avatar, setAvatar] = useState("assets/images/avatar.jpeg");

  const handleAvatar = () => {
    if (avatar == "assets/images/avatar.jpeg") {
      setAvatar("assets/images/avatar2.jpeg");
    } else if (avatar == "assets/images/avatar2.jpeg") {
      setAvatar("assets/images/avatar.jpeg");
    }
  };
  return (
    <div
      id="about"
      className=" w-full h-[600px] pt-52 justify-center items-center flex bg-[#02072f] flex-row"
    >
      <div className=" w-full flex justify-center items-center flex-row  h-[400px] ">
        <div className="about  w-fit px-10 py-5 flex flex-col gap-5">
          <div className=" relative">
            <div className=" w-fit h-fit rounded-full relative ">
              <img
                src="assets/images/graph.png"
                alt="Avatar Kevin Herrera"
                className=" w-[400px] h-[400px] "
              ></img>
            </div>
            <div className=" w-fit h-fit rounded-full absolute top-0 mt-20 ml-20 ">
              <img
                onMouseEnter={handleAvatar}
                onMouseOut={handleAvatar}
                src={avatar}
                alt="Avatar Kevin Herrera"
                className=" w-[300px] h-[300px] rounded-full cursor-pointer shadow-xl shadow-blue-500/50"
              ></img>
            </div>
          </div>
          <div className="mb-20">
            <div className=" text-white w-full flex flex-col justify-center items-center font-bold">
              <p className=" text-2xl">Kevin Herrera López</p>
              <p className=" text-lg">Systems Engineer & Web Developer</p>
            </div>
          </div>
        </div>

        <div className="title text-white gap-5 w-fit px-10 py-5 flex flex-col">
          <div>
            <h1 className="  text-5xl  font-bold">
              Hi there! <br /> Welcome to <br /> my portfolio.
            </h1>
          </div>
          <div className=" border-sky-500 border-l-4 ml-20 pl-5 w-[500px] text-lg">
            <p>
              Since high school when I took graphic design classes I've felt
              special interest in{" "}
              <span className="underline decoration-2 decoration-[#2196f3]">
                front-end development
              </span>{" "}
              ,{" "}
              <span className="underline decoration-2 decoration-[#2196f3]">
                art{" "}
              </span>{" "}
              and{" "}
              <span className="underline decoration-2 decoration-[#2196f3]">
                videogames
              </span>
              . Today I'm a{" "}
              <span className="underline decoration-2 decoration-[#2196f3]">
                developer
              </span>{" "}
              who loves to{" "}
              <span className="underline decoration-2 decoration-[#2196f3]">
                learn
              </span>{" "}
              new stuff constantly as well as combine it with hobbies and
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
