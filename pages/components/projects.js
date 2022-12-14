import React, { useState } from "react";
export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const videos = [
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
        "https://drive.google.com/file/d/1ELW6Sq91uwoWe_JgS6Z-sMtxckxy1v9F/preview",
      name: "Immerso Experience",
      description:
        "A VR project developed by Immerso.io in which I have been involved adding new features using ReactJS and CSS.",
      tech: [
        {
          name: "ReactJS",
        },
        {
          name: "Javascript",
        },
        {
          name: "VR",
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
  ];

  return (
    <div
      id="projects"
      className={`${
        showMore ? " h-[1100px]" : " h-[530px]"
      } bg-[#02072f] w-full justify-center items-center flex overflow-hidden transition-height duration-1000 ease-in-out relative`}
    >
      <div className=" absolute top-0 py-10">
        <div className=" w-full flex justify-center items-center text-white text-2xl font-bold">
          <h1 className=" text-white text-5xl  font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-10">
          {videos.map((resp, i) => {
            return (
              <div
                className=" max-w-[350px] h-[400px]  bg-white rounded-md"
                key={i}
              >
                <div className=" h-full rounded overflow-hidden shadow-lg project-card">
                  <div className=" w-full h-48">
                    <iframe
                      src={resp.video}
                      allowFullScreen="allowFullScreen"
                      allow="autoplay;"
                    ></iframe>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{resp.name}</div>
                    <p className="text-gray-700 text-base">
                      {resp.description}
                    </p>
                  </div>
                  <div className="px-6  ">
                    {resp?.tech?.map((tag, i) => {
                      return (
                        <span
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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

      <div className=" absolute bottom-0 bg-gradient-to-t from-[#02072f] w-full flex justify-center items-center h-32">
        <button
          className=" bg-sky-400 rounded-full h-14 w-32 leading-4 font-bold text-white show-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <span>Show less</span> : <span>Show more</span>}
        </button>
      </div>
    </div>
  );
}
