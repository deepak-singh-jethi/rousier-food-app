import React from "react";
import coverImage from "../assets/contact/cover.png";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <img src={coverImage} alt="cover page" />
      <div className="bg-[#69A19E] text-center text-white md:py-24">
        <h2 className="py-6  font-serif text-xl md:text-3xl lg:text-4xl  ">
          Contact Us
        </h2>
        <div className="max-w-[650px] mx-auto w-full">
          <p className="text-gray-300">
            We’d love to hear about your experience with Rosier. Please get in
            touch with any comments, suggestions or questions you might have.
          </p>
        </div>
        <form
          className="max-w-[500px] mx-auto py-6 sm:px-0 px-3 text-black"
          onSubmit={handleSubmit}>
          <div className="flex gap-0 md:gap-4 flex-col md:flex-row">
            <input type="text" placeholder="Name" className="w-full p-2 my-2" />
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-2 my-2"
            />
          </div>

          <input type="email" placeholder="Email" className="w-full p-2 my-2" />

          <textarea
            placeholder="Message"
            className="w-full p-2 my-2 "></textarea>
          <button className="bg-[#fff] hover:bg-slate-200 px-4 py-2 my-2 text-black rounded-lg mt-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
