import React from "react";

const CommunityCard = ({ blog }) => {
  return (
    <div className="max-w-xs rounded-xl  overflow-hidden shadow-lg m-4 bg-[#f6bf66] w-full mx-auto ">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover object-center w-full h-full"
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-md md:text-xl mb-2">
          {blog.title.substring(0, 50) + "..."}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded mt-2">
          See More
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
