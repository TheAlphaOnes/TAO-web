import React from "react";
import styles from "../Blog.module.css";
import useIsMobile from "../../../../hooks/useIsMobile";

export default function Tag({ tags, authorName }) {
 
  const isMobile = useIsMobile();
  return (
    <div className="md:py-4 py-1 px-2 flex flex-wrap  max-w-fit justify-start gap-[8px] md:gap-3 w-full ">
      {tags.map((tag) => (
        <div
        key={tag}//key is tag since each tag is unique for a post may show warning during testing
          className="flex overflow-hidden  rounded-3xl text-[0.5rem] md:text-[0.7rem] font-[700] w-fit p-0.5"
          id={styles["tag-background"]}
        >
          <div className="bg-[#0a0e16] rounded-3xl px-5 p-0.5">
            <div className="" id={styles["tag"]}>
              {"#" + tag}
            </div>
          </div>
        </div>
      ))}
      <div >
        {isMobile && (
          <div className=" w-fit text-[7px] my-1  md:text-inherit">{authorName}</div>
        )}
      </div>
    </div>
  );
}
