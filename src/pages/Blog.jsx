import React, { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import TopicFilter from "../components/navigation/blog/TopicFilter";
import StaffPicks from "../components/navigation/blog/StaffPicks";
import OtherWriters from "../components/navigation/blog/OtherWriters";
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
        blog_category_array: ["Programming"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_thumbnail: "https://e0.pxfuel.com/wallpapers/398/472/desktop-wallpaper-doge.jpg",

      blog_markup:
        "<ul><li><p><strong>Lorem ipsum, que</strong></p></li></ul>",
    },
    {
      id: 2,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2023-01-10T08:30:00",
      blog_info: {
        blog_full_title: "let me tell you something let me tell you something",
        blog_category_array: ["Beginner","Latest"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_thumbnail: "https://e0.pxfuel.com/wallpapers/398/472/desktop-wallpaper-doge.jpg",
      blog_markup:
        "<ul><li><p><strong><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil <br/>laudantium esse, expedita itaque!</em></strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaqueLorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae <br/> similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaqueLorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic <br/> expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaqueLorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaque</p></li></ul>",
    },{
      id: 3,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2023-11-26T08:30:00",
      blog_info: {
        blog_full_title: "let me tell you something let me tell you something",
        blog_category_array: ["sci/fi","Latest"],
      },
      blog_engagement: { likes: 282, reads: 3388 },
      blog_thumbnail: "https://www.shutterstock.com/image-photo/portrait-beige-cat-shocked-expression-600nw-2319422905.jpg",
      blog_markup:
        "<ul><li><p><strong><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae similique earum quasi dolore nisi? Perspiciatis hic expedita et! Magnam ducimus sapiente mollitia eaque, excepturi quidem necessitatibus doloribus enim nihil laudantium esse, expedita itaque!</em></strong></p></li></ul>",
    },
  ];

  const isMobile = useIsMobile();

  const [filter,setFilter] = useState("Latest");
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const temp = [];
    testBlogs.map((blog)=>{
      if(blog.blog_info.blog_category_array.includes(filter)){
        temp.push(blog);
      }
    });
    setBlogs(temp);
  },[filter])


  return (
    // below this is mobile view
    
    <div className="bg-[#0a0e16]">
      {isMobile ? (
        <div>
          <div className="flex pb-20 w-full ">
            <div className="w-full h-full px-2 " >
              <TopicFilter setFilter={setFilter} filter={filter}/>
              {blogs.map((blog) => (
                <div key={blog.id} className="min-w-full" >
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
          <div className="w-9/12  h-full">
            <div className="w-fit p-4">
            <TopicFilter setFilter={setFilter} filter={filter}/>
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <CallBlogPreview blog={blog} />
                </div>
              ))}</div>
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
