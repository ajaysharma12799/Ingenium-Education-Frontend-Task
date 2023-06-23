import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./feature/blogSlice";

const Store = configureStore({
  reducer: {
    post: PostReducer,
  },
});

export default Store;
