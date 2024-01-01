import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

import { Tag, InnerContent ,EngagementButtons } from "./commonBlog";

import styles from "./Blog.module.css";

export default function BlogPreview({
  // props coming from blog.jsx//send date as a pair like this "date={day:19,month:DEC}"
  date,
  authorName = "@unknownAuthor", //not passed
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
    <div className="min-w-[290px] ">
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
            <div className="text-lg md:text-3xl  font-medium-600 w-fit">
              {date.day}
              <br />
              {month}
            </div>
            {!isMobile && (
              <div className="flex justify-end">
                <div className=" relative w-4 -rotate-90 text-xs  top-[5.5rem] ">
                  {authorName.substring(0, 14)}
                </div>
              </div>
            )}
          </div>
        )}
        <div>
          <div className="flex">
            <div>
              <div className="flex justify-between">
                <h1
                  className=" w-fit h-fit  font-medium-600 text-md md:text-2xl lg:text-3xl md:pb-3"
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
                <div>
                  <EngagementButtons blogLink={blogLink}/>
                </div>
              </div>
              <div className="font-quicksand  max-h-44 text-sm font-light-300 hidden md:block">
                <InnerContent content={content} />
              </div>
              <Link className="hidden md:block bg-red-600 bg-clip-text text-transparent">
                ...read more
              </Link>
              {isMobile && (<span className="text-[0.7rem] font-[500] text-[#61707D]">
                {date.day}.{date.month + 1}.{date.year}
              </span>)}
              <div className=" md:pt-3 flex flex-wrap items-center md:gap-3">
                <Tag tags={tags} authorName={authorName} reads={reads} time={time}/>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center md:px-4">
          <div className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] rounded-sm flex overflow-hidden">
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
