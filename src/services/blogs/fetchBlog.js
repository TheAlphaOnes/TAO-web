import { supabase } from "../supabase";

export async function getAllBlogs() {
  let { data: blogs, error } = await supabase.from("blogs").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("There is an Error");
  }
  console.log(JSON.stringify(blogs));
  return null;
}
[
    {
      id: 1,
      created_at: "2023-12-08T18:54:21.334473+00:00",
      last_updated: "2024-01-03",
      blog_info: { blog_title: "Occupy Pluto", blog_category: "sci/fi" },
      author_info: [
        { link: "https://example.com", author: "Vishnu Gupta" },
        { link: "https://example.com", author: "Vishnu Gupta" },
      ],
      blog_website_url: "https://something.com",
      blog_engagement: { likes: 282, reads: 3388 },
      blog_markup:
        '<main>\n    <!-- Blog Posts -->\n    <article>\n      <h2>Post Title 1</h2>\n      <p>Author: John Doe</p>\n      <p>Date: January 1, 2023</p>\n      <p>This is the content of the blog post.</p>\n      <a href="/posts/post-1">Read more...</a>\n    </article>\n\n    <article>\n      <h2>Post Title 2</h2>\n      <p>Author: Jane Smith</p>\n      <p>Date: February 15, 2023</p>\n      <p>This is another blog post content.</p>\n      <a href="/posts/post-2">Read more...</a>\n    </article>\n\n    <!-- Sidebar -->\n    <aside>\n      <h2>Recent Posts</h2>\n      <ul>\n        <li><a href="/posts/post-1">Post Title 1</a></li>\n        <li><a href="/posts/post-2">Post Title 2</a></li>\n      </ul>\n    </aside>\n  </main>\n',
    },
  ];
  