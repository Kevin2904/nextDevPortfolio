import React, { useState } from "react";
import { useVisibility } from "../../lib/visibilityContext";
import SkillsCard from "./skills/skillsCard";
import SkillsSlider from "./skills/skillsSlider";
import TeamCard from "./skills/teamCard";
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
      className=" w-full h-fit bg-[#072966] flex flex-col  items-center pt-10 relative "
    >
      <h1 className=" text-white text-5xl  font-bold">Skills</h1>

      <SkillsSlider />

      <div className=" flex flex-col justify-center items-center w-full mt-10">
        <div className="relative grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full h-fit gap-10 xl:px-[20vw] lg:px-[100px] md:px-[18vw] sm:px-[100px]">
          <SkillsCard content={frontSkills} />
          <SkillsCard content={backSkills} />
        </div>
      </div>

      <div className=" w-full h-fit mt-10 flex flex-col justify-center items-center py-5">
        <h2 className=" text-white text-5xl  font-bold">My latest teams</h2>

        <div className=" flex flex-col justify-center items-center w-full mt-10">
          <div className="relative grid grid-cols-3 w-fit h-fit gap-5 ">
            <TeamCard
              company="Consulting Group"
              work="Service Desk Engineer Intern, code bug fixes, new features development and direct interaction with different customers."
              page="https://www.cgclatam.com/"
            />
            <TeamCard
              company="Immerso.io"
              work="Front-end developer, code bug fixes, project development from start to finish and integration of new functionalities."
              page="https://immerso.io/"
            />
            <TeamCard
              company="DoitXR"
              work="Front-end developer, code bug fixes, project development from start to finish and integration of new functionalities."
              page="https://www.doitxr.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//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
