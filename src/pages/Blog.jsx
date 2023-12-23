import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import TopicFilter from "../components/navigation/blog/TopicFilter";
import BlogPreview from "../components/navigation/blog/BlogPreview";

export default function Blog() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-[#0a0e16]">
      {isMobile ? (
        <div>
          <div className="flex h-screen w-full ">
            <div className="w-full h-full px-2 border-2 border-pink-400">
              <TopicFilter />
              <BlogPreview />
            </div>
          </div>
          <div className="h-24 border-2 border-blue-500 "></div>
        </div>
      ) : (
        <div className="flex h-screen w-full ">
          <div className="w-5/6 h-full border-2 border-pink-400">
            <TopicFilter />
            <BlogPreview />
          </div>

          <div className="w-1/6 h-full border-2 border-blue-500 "></div>
        </div>
      )}
    </div>
  );
}
