import { createSlice } from "@reduxjs/toolkit";
import { recipies } from "../Data/Recipies";

const initialState = recipies;

export const recipieSlice = createSlice({
  name: "recipies",
  initialState,
});
