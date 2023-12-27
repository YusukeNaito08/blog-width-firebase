import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./components/featrues/postSlice.jsx";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
