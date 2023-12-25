import React from "react";
import { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

import upload from "../../../assets/img/upload.png";
import like from "../../../assets/img/like.png";
import bookmark from "../../../assets/img/bookmark.png";

import styles from "./Blog.module.css";
import { supabase } from "../../../services/supbase";

export default function BlogPreview({
  // props coming from blog.jsx//send date as a pair like this "date={day:19,month:DEC}"
  date,
  authorName = "@unknown", //not passed
  title,
  tags,
  likes,
  reads,
  content,
  imageUrl,
}) {
  const isMobile = useIsMobile();

  return (
    <div>
      <div className="w-screen sm:w-full">
        <div className="flex md:pl-20 md:pr-7">
          <div className=" w-fit pr-5 ">
            <div className="text-3xl font-medium-600 w-fit">
              {date.day}
              <br />
              {date.month}
            </div>
            {!isMobile && (
              <div className="flex justify-end">
                <div className=" relative w-4 -rotate-90 text-xs  top-32 ">
                  {authorName}
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="flex">
              <div>
                <div className="flex ">
                  <h1
                    className=" w-full h-fit md:h-fit  font-medium-600  text-2xl lg:text-3xl pb-3"
                    id={styles["blog-heading"]}
                  >
                    {title}
                  </h1>
                  <div className="flex gap-2 px-2 items-start pt-2">
                    <button className="w-5 h-5 ">
                      <img src={bookmark} alt="upload" />
                    </button>
                    <button className="w-5 h-5 bg-red-600 rounded-full">
                      <img src={like} alt="like" />
                    </button>
                    <button className="w-5 h-5 bg-gray-200 rounded-full">
                      <img src={upload} alt="bookmark" />
                    </button>
                  </div>
                </div>
                <div className="pb-2 h-44 text-sm font-light-300 first-letter:first-line: hidden md:block">
                  <div className="flex h-40 overflow-hidden " dangerouslySetInnerHTML={{ __html: content }}></div>
                  
                </div>
                <Link className=" bg-red-600 bg-clip-text text-transparent">
                    ...Read More
                  </Link>
                <div className="relative pt-3  bottom-0 flex flex-wrap items-center gap-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex overflow-hidden rounded-3xl w-fit p-0.5"
                      id={styles["tag-background"]}
                    >
                      <div className=" px-2 bg-[#0a0e16]" id={styles["tag"]}>
                        {"#" + tag}
                      </div>
                    </div>
                  ))}
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
          <div className=" flex items-center p-4">
            <div>
              <img
                src={imageUrl}
                alt="image"
                className="bg-blue-500 w-24 h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
