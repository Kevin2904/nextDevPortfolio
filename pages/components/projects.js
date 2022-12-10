import Link from "next/link";
import React, { useState } from "react";
export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const videos = [
    {
      video:
        "https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview",
      name: "Moonlight",
      description: "",
      tech: [
        {
          name: "NextJS",
        },
        {
          name: "Typescript",
        },
        {
          name: "Phaser3",
        },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className={`${
        showMore ? " h-[1000px]" : " h-[500px]"
      } bg-slate-400 w-full justify-center items-center flex overflow-hidden transition-height duration-1000 ease-in-out relative`}
    >
      <div className=" absolute top-0 py-10">
        <div className=" w-full flex justify-center items-center text-white text-2xl font-bold">
          <h1>Projects</h1>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-10">
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] h-fit  bg-white rounded-md">
            <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
              <div className=" w-full h-48">
                <iframe
                  src="https://drive.google.com/file/d/1a45gj8JfidUC3vDT8MxrHMrH6G_r3mLi/preview"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Moonlight</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ReactJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Typescript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Phaser3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-0 bg-gradient-to-t from-white w-full flex justify-center items-center h-32">
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
