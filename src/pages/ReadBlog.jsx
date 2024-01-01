import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {Tag} from "../components/navigation/blog/commonBlog"

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
    time,
    blogLink,
  } = location.state;

  return (
    <div className="min-h-screen min-w-[270px] max-w-screen bg-[#0a0e16]">
      <motion.div
        initial={{
          
          scale: 0.3,
          opacity: 0.01,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="py-9 px-4">
          <div className="md:h-[11rem] h-[9rem] md:w-[36rem] w-full rounded-md shadow-xl bg-[#0c1321] overflow-hidden justify-center items-center flex mx-auto">
            <img
              src={imageUrl}
              alt="topic imsge"
              className="object-cover bg-[#0a0e16]"
            />
            <div className="absolute  flex flex-col items-center" style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 1)', }}>
              <div className="text-[0.9rem] md:text-[1.2rem] px-5 font-IBM md:w-[28rem] text-center">
                {title}
              </div>
              <div className="text-[0.7rem] md:text-[1rem] ont-IBM px-4">
                {authorName}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 px-2 w-full md:w-[44.5rem] text-[0.7rem] font-[700] text-[#61707D] mx-auto  pb-2">
          <span className="">
            {date.day}.{date.month + 1}.{date.year}
          </span>
          <div className="w-10 -translate-y-[7px] border-b-2"></div>
          <span>4 minutes</span>
        </div>
        <div className="px-3">
          <div
            className="w-full md:w-[44.5rem] text-sm font-quicksand leading-7 mx-auto "
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="md:w-[44.5rem] mx-auto justify-start pt-2 md:pt-3 flex flex-wrap items-center md:gap-3">
                <Tag tags={tags} authorName={authorName} reads={reads} time={time}/>
              </div>
      </motion.div>
    </div>
  );
}
