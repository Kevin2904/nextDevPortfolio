import React from "react";
import SkillsSliderContent from "./skillsSliderContent";

export default function SkillItem(props) {
  const { skill } = props;
  return (
    <div className=" flex flex-row px-5 h-24 ">
      <div className="flex-col ">
        <p className=" xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl text-4xl xl:mt-0 lg:mt-0 md:mt-0 sm:mt-2 mt-2 font-bold text-white">
          {skill}
        </p>
      </div>
    </div>
  );
}
