import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Blogs = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-gray-800 font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-t-md"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-700 mb-2">{blog.date}</p>
          <hr className="my-4 border-gray-200" />
          <div>
            {blog.content.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {section.heading}
                </h2>
                <p className="text-gray-700 mb-4">
                  {Array.isArray(section.text) ? (
                    <ul className="list-disc list-inside">
                      {section.text.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    section.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
