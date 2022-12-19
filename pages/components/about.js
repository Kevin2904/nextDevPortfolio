import Link from "next/link";
import React, { useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
export default function About(props) {
  const [avatar, setAvatar] = useState("assets/images/avatar.jpeg");
  const { reference } = props;

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
      className=" w-full h-screen  justify-center items-center flex bg-gradient-to-b from-[#1f3a8a] to-[#02072f] flex-row relative"
      ref={reference}
    >
      <div className=" fixed flex justify-center items-center w-full h-full object-cover   bg-slate-500">
        <img
          src="/assets/images/background.jpg"
          className=" w-full h-full object-cover relative"
        ></img>
        <div className=" w-full flex justify-center items-center xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:-mt-0 lg:-mt-0 md:-mt-0 sm:-mt-40 -mt-40  h-[400px] absolute ">
          <div className="about  w-fit px-10 xl:py-5 lg:py-5 md:pt-5 sm:pt-5 pt-5 flex flex-col gap-5">
            <div className=" relative">
              <div className=" w-fit h-fit rounded-full relative ">
                <img
                  src="assets/images/graph.png"
                  alt="Avatar Kevin Herrera"
                  className=" xl:w-[400px] lg:w-[400px] md:w-[280px] sm:w-[280px] w-[220px] xl:h-[400px] lg:h-[400px] md:h-[280px] sm:h-[280px] h-[230px] "
                ></img>
              </div>
              <div className=" w-fit h-fit rounded-full absolute top-0 xl:mt-20 lg:mt-20 md:mt-16 sm:mt-16 mt-14 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-20 ml-14 ">
                <img
                  onMouseEnter={handleAvatar}
                  onMouseOut={handleAvatar}
                  src={avatar}
                  alt="Avatar Kevin Herrera"
                  className=" xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] w-[170px] xl:h-[300px] lg:h-[300px] md:h-[200px] sm:h-[200px] h-[170px]  rounded-full cursor-pointer shadow-xl shadow-blue-500/50"
                ></img>
              </div>
            </div>
            <div className="xl:mb-20 lg:mb-20 md:mb-0 sm:mb-0 mb-0">
              <div className=" text-white w-full flex flex-col justify-center items-center font-bold">
                <p className="2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg text-center">
                  Kevin Herrera López
                </p>
                <p className=" xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm text-center">
                  Systems Engineer & Web Developer
                </p>
              </div>
            </div>
          </div>

          <div className="title text-white gap-5 w-fit px-10 xl:py-5 lg:py-5 md:py-0 sm:py-0 py-0 flex flex-col">
            <div>
              <h1 className="xl:text-5xl lg:text-4xl md:text-3x sm:text-3xl text-2xl font-bold xl:block lg:block md:block sm:hidden hidden">
                Hi there! <br /> Welcome to <br /> my portfolio.
              </h1>
              <h1 className="xl:text-5xl lg:text-4xl md:text-3x sm:text-2xl text-xl font-bold xl:hidden lg:hidden md:hidden sm:block block">
                Hi there! <br /> Welcome to my portfolio.
              </h1>
            </div>
            <div className=" border-sky-500 border-l-4 xl:w-[500px] lg:w-[400px] md:w-[350px] sm:w-fit w-fit  pl-2">
              <p className="xl:text-lg lg:text-lg md:text-base sm:text-base text-sm">
                Since high school when I took graphic design classes I&apos;ve
                felt special interest in{" "}
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
                . Today I&apos;m a{" "}
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
    </div>
  );
}

/*
 <MouseParallaxContainer globalFactorX={0.5} globalFactorY={0.5}>
          <MouseParallaxChild factorX={0} factorY={0.5}>
            <img
              src="/assets/images/background.jpg"
              className=" w-full h-full object-cover relative"
            ></img>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.2} factorY={0.5}>
            <div className=" w-full flex justify-center items-center flex-row  h-[400px] absolute -mt-[800px]">
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
                    Since high school when I took graphic design classes
                    I&apos;ve felt special interest in{" "}
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
                    . Today I&apos;m a{" "}
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
          </MouseParallaxChild>
        </MouseParallaxContainer>

*/
