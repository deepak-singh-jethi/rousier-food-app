import React from "react";
import { Link } from "react-router-dom";

const CommunityCard = ({ blog }) => {
  return (
    <div className="max-w-xs rounded-xl   overflow-hidden shadow-lg m-4 bg-[#f9d792] w-full mx-auto ">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover object-center w-full h-full"
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-semibold text-md md:text-xl mb-2">
          {blog.title.substring(0, 50) + "..."}
        </div>
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold mt-3 "
          to={`/community/${blog.id}`}>
          See All
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;
