import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../components/navigation/blog/Blog.module.css";
import Tag from "../components/navigation/blog/commonBlog/Tag";

export default function ReadBlog() {
  const location = useLocation();
  const {
    date,
    authorName, //not passed
    title,
    tags,
    likes,
    reads,
    content,
    imageUrl,
  } = location.state;

  return (
    <div className="min-h-screen bg-[#0a0e16]">
      <div >
        <div className="py-9 px-4">
          <div className="md:h-[11rem] h-[9rem] md:w-[36rem] w-full rounded-md shadow-xl bg-[#0c1321] overflow-hidden justify-center items-center flex mx-auto">
            <img
              src={imageUrl}
              alt="topic imsge"
              className="object-cover bg-[#0a0e16]"
            />
            <div className="absolute flex flex-col items-center">
              <div
                className="flex overflow-hidden  rounded-3xl text-[0.7rem] font-[700] w-fit p-0.5"
                id={styles["tag-background"]}
              >
                <div className="bg-[#0a0e16] rounded-3xl px-5 p-0.5 ">
                  <div className="" id={styles["tag"]}>
                    {"#" + tags[0]}
                  </div>
                </div>
              </div>
              <div className="text-[0.9rem] md:text-[1.5rem] px-5 font-[600] w-screen md:w-[28rem] text-center">
                {title}
              </div>
              <div className="text-[0.9rem] md:text-[1rem] px-4">
                {authorName}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-[44.5rem] text-[0.7rem] font-[700] text-[#61707D] mx-auto  pb-2">
          <span className="">
            {date.day}.{date.month + 1}.{date.year}
          </span>
          <div className="w-10 -translate-y-[7px] border-b-2"></div>
          <span>4 minutes</span>
        </div>
        <div className="px-3">
          <div
            className="w-full md:w-[44.5rem] text-sm font-light-300 mx-auto "
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="px-2 md:px-1 md:w-[44.5rem] mx-auto flex justify-start">
          <Tag tags={tags} />
        </div>
      </div>
    </div>
  );
}
