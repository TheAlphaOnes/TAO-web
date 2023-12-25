import React, { useState } from "react";
import useBlog from "../../../contextProvider/BlogContext";

export default function TopicFilter({filter,setFilter}) {
  
  return (
    <div>
      <div className="py-12 px-3  md:px-32">
        <ul className="flex md:gap-4 gap-2  w-fit h-6 text-gray-500 text-sm border-indigo-800 border-b-2 border-opacity-30 ">
          <li className="">
            <button
              className={`px-1 ${
                filter === "Latest" &&
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
                "-translate-y-[3px] pb-1 border-b-4 border-red-500"
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
