import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { email: "", password: "", confirmPassword: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!isSignIn && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      // form submission
    }
  };

  const switchForm = () => {
    setIsSignIn(!isSignIn);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center my-5 sm:my-8 md:my-12 lg:my-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full sm:w-auto md:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 block px-1 py-2 w-full rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
            required
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`mt-1 block px-1 py-2 w-full rounded-md border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 pr-10`}
            required
          />
          <button
            type="button"
            className="absolute right-0 top-[50%] flex items-center px-3 bg-transparent text-gray-500 focus:outline-none"
            onClick={togglePasswordVisibility}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        {!isSignIn && (
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`mt-1 block px-1 py-2 w-full rounded-md border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              required
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        )}
        <div className="flex items-center justify-between flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 px-4 rounded-md text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <button
            type="button"
            onClick={switchForm}
            className="text-blue-500 hover:text-blue-700 text-sm focus:outline-none">
            {isSignIn
              ? "Create an account"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
