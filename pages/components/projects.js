import Link from "next/link";
import React, { useState } from "react";
export default function Projects() {
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
    <div id="projects" className=" w-full h-screen   ">
      <p className=" text-black">projects</p>
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
  );
}
