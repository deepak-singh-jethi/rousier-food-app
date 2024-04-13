import React from "react";

const BottomFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mt-6 space-y-5 md:space-y-0 md:space-x-8 border-t border-gray-200 pt-5">
      {/* Helpful Links */}
      <div className="text-center md:text-left">
        <h2 className="text-xl  font-bold text-gray-300 mb-4 ">
          Helpful Links
        </h2>
        <ul>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Our Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              All Products
            </a>
          </li>
        </ul>
      </div>

      {/* Policies */}
      <div className="text-center md:text-left">
        <h2 className="text-xl  font-bold text-gray-300 mb-4 ">Policies</h2>
        <ul>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Refund Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Shipping Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold text-white mb-2">Contact us</h2>
        <p className="text-white text-lg">Help</p>
      </div>

      {/* Follow Us */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold text-white mb-2">Follow us</h2>
        <ul className="flex items-center justify-center md:justify-start">
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              F
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              I
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-semibold text-lg">
              Y
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomFooter;
