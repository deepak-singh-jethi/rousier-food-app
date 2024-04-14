import { createSlice } from "@reduxjs/toolkit";
import { blogPosts } from "../Data/Blogs.js";

const initialState = blogPosts;

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
});
