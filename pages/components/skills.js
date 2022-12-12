import React, { useState } from "react";
import SkillsCard from "./skills/skillsCard";
import SkillsSlider from "./skills/skillsSlider";
export default function Skills() {
  return (
    <div
      id="skills"
      className=" w-full h-screen  bg-[#02072f] flex flex-col  items-center pt-20  "
    >
      <h1 className=" text-white text-5xl  font-bold">Skills</h1>

      <SkillsSlider />

      <div className=" flex flex-row justify-center items-center w-full mt-20">
        <div className=" grid grid-cols-2 w-full gap-10 px-[500px]">
          <SkillsCard />
          <SkillsCard />
        </div>
      </div>
    </div>
  );
}
