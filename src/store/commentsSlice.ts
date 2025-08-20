import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Comment, CommentsState } from "../types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Async thunk for fetching comments
export const fetchComments = createAsyncThunk(
  "comments/fetchComments", //action Type
  async (postId: number) => {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    return response.json() as Promise<Comment[]>;
  }
);

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch comments";
      });
  },
});

export const { clearComments, clearError } = commentsSlice.actions;
export default commentsSlice.reducer;
