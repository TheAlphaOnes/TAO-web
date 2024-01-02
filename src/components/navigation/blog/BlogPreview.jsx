import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

import { Tag, InnerContent ,EngagementButtons } from "./commonBlog";

import styles from "./Blog.module.css";

export default function BlogPreview({
  // props coming from blog.jsx//send date as a pair like this "date={day:19,month:DEC}"
  date,
  authorName = "@unknownAutho", //not passed
  title,
  tags,
  likes,
  reads,
  content,
  imageUrl,
  time=4,
  blogLink="https//jo bhi link hai",
}) {
  const isMobile = useIsMobile();

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const month = months[date.month];

  return (
    <div className="min-w-[290px] md:px-[90px]">
      <motion.div
        initial={{
          scale: 0.95,
          opacity: 0.6,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        className="flex justify-evenly"
      >
        {!isMobile && (
          <div className=" w-fit pr-2 md:pr-5 ">
            <div className=" md:font-[600] md:text-[24px] w-fit">
              {date.day}
              <br />
              {month}
            </div>
            {!isMobile && (
              <div className="flex justify-end">
                <div className=" relative w-4 -rotate-90 text-[10px] font-[300]  top-[4rem] ">
                  {authorName.substring(0, 14)}
                </div>
              </div>
            )}
          </div>
        )}
        <div>
          <div className="flex">
            <div>
              <div className="flex justify-start md:pb-2">
                <h1
                  className=" w-fit h-fit  font-[400] text-[15px] md:text-[24px] font-IBM leading-[19.53px] md:leading-[30.77px] "
                  id={styles["blog-heading"]}
                >
                  <Link
                    to={"/read_blog"}
                    state={{
                      date,
                      authorName, //not passed
                      title,
                      tags,
                      likes,
                      reads,
                      content,
                      imageUrl,
                      time,
                      blogLink
                    }}
                  >
                    {title}
                  </Link>
                </h1>
                <div className="scale-75 md:scale-90 px-3  ">
                  <EngagementButtons blogLink={blogLink}/>
                </div>
              </div>
              <div className="font-quicksand overflow-hidden max-h-[90px] leading-[18.75px] text-[15px] font-[400] hidden md:block">
                <InnerContent content={content} />
              </div>
              <Link className="hidden md:block bg-red-600 bg-clip-text text-transparent">
                ...read more
              </Link>
              {isMobile && (<span className="text-[0.7rem] font-[500] text-[#61707D]">
                {date.day}.{date.month + 1}.{date.year}
              </span>)}
              <div className="  flex flex-wrap items-center">
                <Tag tags={tags} authorName={authorName} reads={reads} time={time}/>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-start py-2 md:px-4">
          <div className="w-[57px] h-[57px] rounded-[5px] md:w-[120px] md:h-[120px] flex overflow-hidden">
            <img
              src={imageUrl}
              alt="image"
              className="bg-blue-900 w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
