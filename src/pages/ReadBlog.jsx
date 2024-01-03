import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import styles from "../components/navigation/blog/Blog.module.css";
import { EngagementButtons } from "../components/navigation/blog/commonBlog";
import useIsMobile from "../hooks/useIsMobile";

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

  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen pb-4 min-w-[270px] max-w-screen bg-[#0a0e16]">
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
        <div className="">
          <div className="md:h-[15rem] h-[9rem] w-fit rounded-md shadow-xl overflow-hidden justify-center items-center flex mx-auto">
            <img
              src={imageUrl}
              alt="topic imsge"
              className="object-cover w-[320px] h-[90px] md:w-[782px] md:h-[191px]"
            />
            <div
              className="absolute  flex flex-col items-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              <div className="font-[400] max-w-[300px] min-w-[300px] md:max-w-[740px] text-[14px] md:text-[24px] px-5 font-IBM  text-center">
                {title}
              </div>
              <div className="text-[10px] md:text-[15px] ont-IBM px-4">
                by {authorName}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[300px] md:w-[782px]  mx-auto md:px-0">
          <div className="flex gap-2 w-full font-[400] md:font-[700] text-[10px] md:text-[12px]  text-[#61707D] mx-auto  pb-2">
            <span className="">
              {date.day}.{date.month + 1}.{date.year}
            </span>
            <div className="w-[12px] md:w-[35px] -translate-y-[4px] md:-translate-y-[8px]  border-b-2 border-gray-600"></div>
            <span>4 minutes</span>
          </div>
          <div className="">
            <div
              className="w-full  text-[15px] md:text-[15px] font-quicksand leading-[25px] mx-auto "
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
        <div className="w-[300px] md:w-[782px]  mx-auto md:px-0">
          <div className="font-[400] md:font-[450] text-[12px] md:text-[15px] py-[5px] md:py-0 md:pt-[15px]">{authorName}</div>
          <div className="md:w-[44.5rem] justify-start md:pt-3 flex flex-wrap items-center gap-[4px] md:gap-3">
            {tags.map((tag) => (
              <div
                key={tag} //key is tag since each tag is unique for a post may show warning during testing
                className="flex items-center overflow-hidden h-[18px] md:h-[21px] rounded-[100px]  p-[1px] "
                id={styles["tag-background"]}
              >
                <div className="bg-[#0a0e16] rounded-[100px] text-[9px] font-[500] px-3 md:px-4  h-[16px] md:h-[19px] flex items-center -translate-y-[0.25px] md:translate-y-0">
                  <div className="" id={styles["tag"]}>
                    {"#" + tag}
                  </div>
                </div>
              </div>
            ))}
            <div className="px-2 -translate-y-[2px]">
              <EngagementButtons blogLink={blogLink}/>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
