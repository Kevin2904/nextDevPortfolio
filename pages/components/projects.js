import React, { useState } from "react";
export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const videos = [
    {
      video:
        "https://drive.google.com/file/d/1TsK3vKcAaKWGxpqgo0XojCv_QfAerGXv/preview",
      name: "Latam Innovation Summit 2023",
      description:
        "Website developed by DoitXR for the Latam Innovation Summit 2023 conference in Costa Rica using NextJS, Tailwind and Firebase.",
      tech: [
        {
          name: "NextJS",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Firebase",
        },
      ],
    },

    {
      video:
        "https://drive.google.com/file/d/1XhB5rzAFYUpDsOo294iHnHCIlJJN9Djm/preview",
      name: "Interactive games",
      description:
        "Games developed by DoitXR to be implemented in massive events using NextJS, Tailwind and Firebase.",
      tech: [
        {
          name: "NextJS",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Firebase",
        },
      ],
    },
    {
      video:
        "https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview",
      name: "Moonlight",
      description:
        "Stand-alone project, platform video game developed using ReactJS with Typescript and Phacer3.",
      tech: [
        {
          name: "ReactJS",
        },
        {
          name: "Typescript",
        },
        {
          name: "Phaser3",
        },
      ],
    },
    {
      video:
        "https://drive.google.com/file/d/15DWGjUyk8IxEzn8v0Kz5fwzlMlx_e7GO/preview",
      name: "GIZ",
      description:
        "Project developed by Immerso.io for the German company GIZ, using ReactJS and Tailwind.",
      tech: [
        {
          name: "ReactJS",
        },
        {
          name: "Tailwind",
        },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className={`${
        showMore ? " h-[1200px]" : " h-[690px]"
      } bg-[#072966]  w-full justify-center items-center flex overflow-hidden transition-height duration-1000 ease-in-out relative`}
    >
      <div className=" absolute top-0 py-10">
        <div className=" w-full flex justify-center items-center text-white text-2xl font-bold">
          <h1 className=" text-white text-5xl  font-bold">Projects</h1>
        </div>
        <img
          src="assets/images/astronaut.png"
          className=" w-[340px] h-[350px] -rotate-[20deg] absolute top-0 right-0 mr-10 mt-5 z-10 "
        ></img>
        <div className="grid grid-cols-4 gap-10 py-40 h-fit  rounded-md px-5 mt-10 relative">
          {videos.map((resp, i) => {
            return (
              <div
                className=" max-w-[350px] h-[400px]  bg-gradient-to-b from-[#2196f3] border-2 border-[#2196f3] rounded-md"
                key={i}
              >
                <div className=" h-full rounded overflow-hidden shadow-lg project-card relative">
                  <div className=" w-full h-48">
                    <iframe
                      src={resp.video}
                      allowFullScreen="allowFullScreen"
                      allow="autoplay;"
                    ></iframe>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      {resp.name}
                    </div>
                    <p className="text-white text-base">{resp.description}</p>
                  </div>
                  <div className="px-6 absolute bottom-0 mb-2">
                    {resp?.tech?.map((tag, i) => {
                      return (
                        <span
                          className="inline-block bg-[#2196f3] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                          key={i}
                        >
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
<div className=" absolute bottom-0 bg-gradient-to-t from-[#072966] w-full flex justify-center items-center h-32">
        <button
          className=" bg-sky-400 rounded-full h-14 w-32 leading-4 font-bold text-white show-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <span>Show less</span> : <span>Show more</span>}
        </button>
      </div>
*/
