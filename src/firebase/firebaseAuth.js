import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import authActions from "../store/user";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzkofFT91HPWtTUTbZdbKiuu3Ep6-WgM",
  authDomain: "react-firebase-auth-8734c.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-8734c-default-rtdb.firebaseio.com",
  projectId: "react-firebase-auth-8734c",
  storageBucket: "react-firebase-auth-8734c.appspot.com",
  messagingSenderId: "194722257410",
  appId: "1:194722257410:web:a8caf64afaaf719b0ca51b",
  measurementId: "G-DM4J7CHV6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };

//redux thunk for sign up
export const signUpThunk = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.startAuth());
    try {
      const { email, password } = userData;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(
        authActions.setToken({ token: user.accessToken, email: user.email })
      );
    } catch (error) {
      dispatch(authActions.setAuthError(error.message));
    }
  };
};

//redux thunk for sign in
export const signInThunk = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.startAuth());
    try {
      const { email, password } = userData;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(
        authActions.setToken({ token: user.accessToken, email: user.email })
      );
    } catch (error) {
      dispatch(authActions.setAuthError(error.message));
    }
  };
};
