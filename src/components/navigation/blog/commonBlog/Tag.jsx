import React from 'react'
import styles from "../Blog.module.css";

export default function Tag({tags}) {
  return (
    <div  className="py-4 flex justify-start gap-3 w-full ">
      {tags.map((tag ) => (
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
    </div>
  )
}
