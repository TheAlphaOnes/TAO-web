import React from "react";
import BlogPreview from "./BlogPreview";

export default function CallBlogPreview({ blog }) {


  // date calculation //

  const timestamp = new Date(blog.last_updated); // assuming last_updated looks like this '2023-12-19 15:51:38.632+00'

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

  const day = timestamp.getDate().toString().padStart(2, "0");
  const month = months[timestamp.getMonth()];

  const date = { day, month };


  // blog title and blog category //

  const title = blog.blog_info.blog_full_title;
  const tags = blog.blog_info.blog_category_array;

  // like and reads //
  const likes = blog.blog_engagement.likes;
  const reads = blog.blog_engagement.reads;

  // blog inner text // 
  const innerContent = blog.blog_markup;

  // blog image url //
  const imageUrl = blog.blog_thumbnail

  const logDate = ()=>{
    console.log(date);
  }
  return (
    <>
      <div className="py-10" onClick={logDate}>
        <BlogPreview
          date={date}
          title={title}
          tags={tags}
          likes={likes}
          reads={reads}
          content={innerContent}
          imageUrl={imageUrl}
        />
      </div>
    </>
  );
}
