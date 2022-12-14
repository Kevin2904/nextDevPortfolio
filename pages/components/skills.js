import React, { useState } from "react";
import SkillsCard from "./skills/skillsCard";
import SkillsSlider from "./skills/skillsSlider";
export default function Skills() {
  const frontSkills = [
    {
      title: "Front-end",
      icon: "assets/icons/frontEnd.svg",
      front: [
        {
          text: "Application development ensuring intuitive and responsive interfaces.",
          experience: [
            "Websites developed according to client requirements.",
            "Bug fixing and development of new functionalities in other developers' projects.",
          ],
        },
      ],
      back: [
        "ReactJS",
        "NextJS",
        "Angular",
        ".NET Core 6 (MVC)",
        "Tailwind",
        "Bootstrap",
        "CSS",
      ],
    },
  ];

  const backSkills = [
    {
      title: "Back-end",
      icon: "assets/icons/database.svg",
      front: [
        {
          text: "Application development ensuring efficient data management.",
          experience: [
            "Database creation and management.",
            "API development and integration from multiple projects.",
            "Customer service and service desk.",
          ],
        },
      ],
      back: [
        "Node.js",
        "PHP",
        "ASP.NET(C#)",
        ".NET Core 6 (MVC)",
        "SQL Server",
        "Oracle DB",
        "MySQL",
        "MongoDB",
        "Firebase",
      ],
    },
  ];

  return (
    <div
      id="skills"
      className=" w-full h-screen  bg-[#02072f] flex flex-col  items-center pt-20  "
    >
      <h1 className=" text-white text-5xl  font-bold">Skills</h1>

      <SkillsSlider />

      <div className=" flex flex-row justify-center items-center w-full mt-20">
        <div className=" grid grid-cols-2 w-full gap-10 px-[500px]">
          <SkillsCard content={frontSkills} />
          <SkillsCard content={backSkills} />
        </div>
      </div>
    </div>
  );
}
