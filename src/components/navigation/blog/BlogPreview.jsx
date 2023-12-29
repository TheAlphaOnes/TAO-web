import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";
import { Tag, InnerContent } from "./commonBlog";

import upload from "../../../assets/img/upload.svg";
import like from "../../../assets/img/like.svg";
import bookmark from "../../../assets/img/bookmark.svg";

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
    <div>
      <div className="w-screen sm:w-full">
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
          className="flex md:pl-16 md:pr-14 "
        >
          <div className=" w-fit pr-2 md:pr-5 ">
            <div className="text-xl md:text-3xl  font-medium-600 w-fit">
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
          <div>
            <div className="flex">
              <div>
                <div className="flex ">
                  <h1
                    className=" w-full h-fit md:h-fit  font-medium-600 text-lg md:text-2xl lg:text-3xl pb-3"
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
                      }}
                    >
                      {title}
                    </Link>
                  </h1>
                  <div className="flex gap-1 px-2  items-start pt-4">
                    <button className="w-5 ">
                      <img src={bookmark} alt="upload" />
                    </button>
                    <button className="w-5 ">
                      <img src={like} alt="like" />
                    </button>
                    <button className="w-5  ">
                      <img src={upload} alt="bookmark" />
                    </button>
                  </div>
                </div>
                <div className="pb-2 max-h-44 text-sm font-light-300 first-letter:first-line: hidden md:block">
                  <InnerContent content={content} />
                </div>
                <Link className=" bg-red-600 bg-clip-text text-transparent">
                  ...Read More
                </Link>
                <div className="relative pt-3  bottom-0 flex flex-wrap items-center gap-3">
                  <Tag tags={tags} />
                  <div>
                    {isMobile && (
                      <div className="">
                        <div className=" relative w-4 ">{authorName}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center p-1">
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
    </div>
  );
}
