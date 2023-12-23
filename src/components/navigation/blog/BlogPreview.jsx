import React from "react";
import { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

import styles from "./Blog.module.css";
import { supabase } from "../../../services/supbase";

export default function BlogPreview() {
  const isMobile = useIsMobile();

  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, praesentium.";
  //text from blog from backend
  let textPreview = "";
  if (text.length > 720) textPreview = text.slice(0, 720);
  else textPreview = text;

  return (
    <div >
      <div>
        <div className="flex md:pl-20 md:pr-7">
          <div className=" w-fit pr-5 ">
            <div className="text-3xl font-medium-600 w-fit">
              19
              <br />
              DEC
            </div>
            {!isMobile && (
              <div className="flex justify-end">
                <div className=" relative w-4 -rotate-90 text-xs  top-32 ">
                  @theauthorofthis
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
                    Let me tell you something Let me tell you somthing
                  </h1>
                  <div className="flex gap-2 px-2 items-start pt-2">
                    <button>
                      <img
                        src=""
                        alt="bookmark"
                        className="w-5 h-5 bg-red-600"
                      />
                    </button>
                    <button>
                      <img src="" alt="like" className="w-5 h-5 bg-red-600" />
                    </button>
                    <button>
                      <img src="" alt="upload" className="w-5 h-5 bg-red-600" />
                    </button>
                  </div>
                </div>
                <div className="pb-5 h-52   hidden md:block">
                  <span className="overflow-hidden h-full ">{textPreview}</span>
                  <Link className="px-2 bg-red-600 bg-clip-text text-transparent">
                    ...Read More
                  </Link>
                </div>
                <div className="relative  bottom-0 flex items-center gap-3">
                  <div
                    className="flex border overflow-hidden rounded-3xl w-fit p-0.5"
                    id={styles["tag-background"]}
                  >
                    <div
                      className=" px-2 bg-[#0a0e16]"
                      id={styles["tag"]}
                    >
                      #TimeFlies
                    </div>
                  </div>
                  <div>
                    {isMobile && (
                      <div className="">
                        <div className=" relative w-4 ">@theauthorofthis</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center p-4">
            <div>
              <img src="" alt="image" className="bg-blue-500 w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
