import React from "react";
import styles from "../Blog.module.css";
import useIsMobile from "../../../../hooks/useIsMobile";

export default function Tag({ tags, authorName, reads, time }) {
  const isMobile = useIsMobile();
  return (
    <div className="md:py-1 py-1 px-2 flex flex-wrap  max-w-fit justify-start gap-[7px]  w-full ">
      {tags.map((tag) => (
        <div
          key={tag} //key is tag since each tag is unique for a post may show warning during testing
          className="flex items-center overflow-hidden h-[14px] md:h-[21px] rounded-[100px]  p-[1px] "
          id={styles["tag-background"]}
        >
          <div className="bg-[#0a0e16] rounded-[100px] text-[5px] md:text-[9px] font-[500] px-2 md:px-4  h-[12px] md:h-[19px] flex items-center translate-y-[0.25px] md:translate-y-0">
            <div className="" id={styles["tag"]}>
              {"#" + tag}
            </div>
          </div>
        </div>
      ))}
      <div>
        <div className="flex gap-[7px] w-fit text-[7px] md:text-[12px] my-1  md:text-inherit">
          <span className="text-[#61707D]">
            {reads}reads . {time}min
          </span>
          {isMobile && <span>{authorName}</span>}
        </div>
      </div>
    </div>
  );
}
