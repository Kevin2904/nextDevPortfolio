import React from "react";
import SkillsSliderContent from "./skillsSliderContent";

export default function SkillsSlider() {
  return (
    <div className="wrapper relative bg-[#2196f3] h-24  mt-20">
      <div className="marquee text-black justify-around flex pt-4">
        <SkillsSliderContent />
        <SkillsSliderContent />
      </div>
    </div>
  );
}
