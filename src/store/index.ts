import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer, // Manages all post-related state
    comments: commentsReducer, // Manages all comment-related state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
