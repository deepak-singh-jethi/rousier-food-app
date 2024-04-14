import React from "react";
import { useSelector } from "react-redux";
import coverImage from "../assets/communityCover.jpeg";
import CommunityCard from "../components/shared/CommuintyCard";

const Community = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={coverImage}
          alt="Community Cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-[#EA9B76] font-bold text-center">
            Our Blogs
          </h1>
        </div>
      </div>
      <div className="container mx-auto w-full my-14 md:my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mx-auto">
          {blogs.map((blog) => (
            <CommunityCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Community;
