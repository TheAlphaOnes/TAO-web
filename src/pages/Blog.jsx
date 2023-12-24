import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import TopicFilter from "../components/navigation/blog/TopicFilter";
import StaffPicks from "../components/navigation/blog/StaffPicks";
import OtherWriters from "../components/navigation/blog/otherWriters";
import CallBlogPreview from "../components/navigation/blog/CallBlogPreview";

export default function Blog() {

  ////                          
  //test blog to imitate database////
  ////

  const testBlogs = [
    {
      id: 1,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2023-12-19T08:30:00",
      blog_info: {
        blog_full_title: "let me tell you something let me tell you something",
        blog_category_array: ["sci/fi" , "begginer", "noob"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_markup:
        "<ul><li><p><strong><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaque!</em></strong></p></li></ul>",
    },
    {
      id: 2,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2023-01-10T08:30:00",
      blog_info: {
        blog_full_title: "let me tell you something let me tell you something",
        blog_category_array: ["sci/fi"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_markup:
        "<ul><li><p><strong><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaque!</em></strong></p></li></ul>",
    },{
      id: 3,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2023-11-26T08:30:00",
      blog_info: {
        blog_full_title: "let me tell you something let me tell you something",
        blog_category_array: ["sci/fi"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_markup:
        "<ul><li><p><strong><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaque!</em></strong></p></li></ul>",
    },
  ];
  const isMobile = useIsMobile();
  return (
    // below this is mobile view
    <div className="bg-[#0a0e16]">
      {isMobile ? (
        <div>
          <div className="flex pb-20 w-full ">
            <div className="w-full h-full px-2 ">
              <TopicFilter />
              {testBlogs.map((blog) => (
                <div key={blog.id}>
                  <CallBlogPreview blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-start items-start h-full border-t-2 border-indigo-800 border-opacity-30 mx-6">
              <div className="w-full sm:w-1/2">
                <h1 className="text-3xl text-center py-3">Staff Picks</h1>

                {/* //loop on staff picks dont forget to copy below */}

                <StaffPicks
                  imageUrl={"some url"}
                  authorName={"@author name"}
                  title={"The best of the titles"}
                />
              </div>

              <div className=" w-full sm:w-1/2">
                <h1 className="text-3xl text-center py-3">Other Writers</h1>

                {/* //loop on other writters dont forget to copy below */}

                <OtherWriters
                  imageUrl={"imageUrl"}
                  authorName={"@theAuthorOfthis"}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // below this is Non-mobile view
        <div className="flex min-h-screen w-full ">
          <div className="w-9/12 h-full">
            <TopicFilter />
              {testBlogs.map((blog) => (
                <div key={blog.id}>
                  <CallBlogPreview blog={blog} />
                </div>
              ))}
          </div>

          <div className="flex pl-3 flex-col justify-center w-3/12 min-h-screen h-full border-l-2 border-indigo-800 border-opacity-30 my-10">
            <div className="w-full">
              <h1 className="text-3xl text-center py-3">Staff Picks</h1>
              <StaffPicks
                imageUrl={"some url"}
                authorName={"@author name"}
                title={"The best of the titles"}
              />
            </div>

            <div className="pt-10 w-full">
              <h1 className="text-3xl text-center py-3">Other Writers</h1>
              <OtherWriters
                imageUrl={"imageUrl"}
                authorName={"@theAuthorOfthis"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
