import React from "react";
import { blogPosts } from "../../Data/Blogs";
import CommuintyCard from "../Layout/CommuintyCard";
import { NavLink } from "react-router-dom";

const Community = () => {
  const selectedBlogs = blogPosts.slice(0, 3);

  return (
    <div className="my-16 md:my-16 bg-white">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center font-serif pb-4 md:pb-10">
          Community
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 sm:mx-auto mx-5 mb-10 mt-4">
          {selectedBlogs.map((blog) => {
            return <CommuintyCard blog={blog} key={blog.title} />;
          })}
        </div>
        <div className="text-center w-full">
          <NavLink to="/community">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              See More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Community;
