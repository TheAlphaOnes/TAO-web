import React from "react";

export default function TopicFilter() {
  return (
    <div>
      <div className="py-12 px-3 md:px-32">
        <ul className="flex  w-fit h-6 text-gray-500 text-sm border-indigo-800 border-b-2 border-opacity-30 ">
          <li className="">
            <button  className="active:-translate-y-[3px] pr-3.5 active:pb-1 active:border-b-4 active:border-red-500">
              help
            </button>
          </li>
          <li>
            <button className="active:-translate-y-[3px] px-3.5 active:pb-1 active:border-b-4 active:border-red-500">Programming</button>
          </li>
          <li>
            <button className="active:-translate-y-[3px] px-3.5 active:pb-1 active:border-b-4 active:border-red-500">Tutorial</button>
          </li>
          <li>
            <button className="active:-translate-y-[3px] px-3.5 active:pb-1 active:border-b-4 active:border-red-500">Stories</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
