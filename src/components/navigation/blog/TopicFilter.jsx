import React, { useState } from "react";

export default function TopicFilter({filter,setFilter}) {
  
  return (
    <div>
      <div className="py-4 md:py-12   md:px-32">
        <ul className="flex md:gap-4 gap-[2px] whitespace-nowrap  w-fit h-6 text-gray-500 text-[10px] md:text-sm border-indigo-800 border-b-2 border-opacity-30 ">
          <li className="">
            <button
              className={`px-1 ${
                filter === "Latest" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("Latest")}
            >
              Latest
            </button>
          </li>
          <li className="">
            <button
              className={`px-1 ${
                filter === "Programming" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("Programming")}
            >
              Programming
            </button>
          </li>
          <li className="">
            <button
              className={`px-1 ${
                filter === "Beginner" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("Beginner")}
            >
              Beginner
            </button>
          </li>
          <li>
            <button
              className={` px-1 ${
                filter === "Tutorial" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("Tutorial")}
            >
              Tutorial
            </button>
          </li>
          <li>
            <button
              className={` px-1 ${
                filter === "Story" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("Story")}
            >
              Story
            </button>
          </li>
          <li>
            <button
              className={` px-1 ${
                filter === "How-we" &&
                "-translate-y-[1px] md:-translate-y-[3px] pb-[8px] md:pb-[5px] border-b-4 border-red-500"
              }`}
              onClick={() => setFilter("How-we")}
            >
              How-we
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
