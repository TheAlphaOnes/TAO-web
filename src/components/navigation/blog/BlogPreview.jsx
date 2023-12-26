import React from "react";
import { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

import upload from "../../../assets/img/upload.svg";
import like from "../../../assets/img/like.svg";
import bookmark from "../../../assets/img/bookmark.svg";

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
        <div className="flex md:pl-20 md:pr-7">
          <div className=" w-fit pr-5 ">
            <div className="text-3xl font-medium-600 w-fit">
              {date.day}
              <br />
              {month}
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
                    <Link
                    to={"/read_blog"}
                    state={{date,
                      authorName, //not passed
                      title,
                      tags,
                      likes,
                      reads,
                      content,
                      imageUrl,}}
                    >
                      {title}
                    </Link>
                  </h1>
                  <div className="flex gap-2 px-2  items-start pt-4">
                    <button className="w-5 scale-125 ">
                      <img src={bookmark} alt="upload" />
                    </button>
                    <button className="w-5  scale-125">
                      <img src={like} alt="like" />
                    </button>
                    <button className="w-5 scale-125 ">
                      <img src={upload} alt="bookmark" />
                    </button>
                  </div>
                </div>
                <div className="pb-2 max-h-44 text-sm font-light-300 first-letter:first-line: hidden md:block">
                  <span
                    className="flex max-h-40 overflow-hidden "
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></span>
                </div>
                <Link className=" bg-red-600 bg-clip-text text-transparent">
                  ...Read More
                </Link>
                <div className="relative pt-3  bottom-0 flex flex-wrap items-center gap-3">
                  {tags.map((tag, index) => (
                    <div
                    className="flex overflow-hidden  rounded-3xl text-[0.7rem] font-[700] w-fit p-0.5"
                    id={styles["tag-background"]}
                  >
                    <div className="bg-[#0a0e16] rounded-3xl px-5 p-0.5">
                      <div className="" id={styles["tag"]}>
                        {"#" + tag}
                      </div>
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
            <div className="w-[5.5rem] h-[5.5rem] rounded-sm flex overflow-hidden">
              <img
                src={imageUrl}
                alt="image"
                className="bg-blue-900 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
