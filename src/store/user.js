import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
  isLoggedIn: false,
  authState: {
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.authState.isLoading = false;
      state.authState.error = null;
    },
    removeToken: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
    startAuth: (state) => {
      state.authState.isLoading = true;
    },
    setAuthError: (state, action) => {
      console.log(action.payload);
      state.authState.isLoading = false;
      state.authState.error = action.payload;
    },
  },
});

const authActions = authSlice.actions;

export default authActions;

export const signUp = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.startAuth());
    try {
    } catch (error) {
      dispatch(authActions.setAuthError(error.message));
    }
  };
};
