import React from "react";
import { blogPosts } from "../../Data/Blogs";
import CommuintyCard from "../shared/CommuintyCard";

const Community = () => {
  const selectedBlogs = blogPosts.slice(0, 3);

  return (
    <div className="my-16 md:my-16 bg-white">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-serif">
          Community
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mx-auto mb-10 mt-4">
          {selectedBlogs.map((blog) => {
            return <CommuintyCard blog={blog} key={blog.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;
