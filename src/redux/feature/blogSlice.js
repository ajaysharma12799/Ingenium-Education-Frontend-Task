import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  currentPostComments: [],
  currentPost: null,
  currentPostAuthor: [],
  isCurrentPostLoading: false,
  isCurrentPostCommentsLoading: false,
  favPosts: [],
};

export const fetchAllPost = createAsyncThunk(
  "home/fetchAllPost",
  async (page) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSinglePost = createAsyncThunk(
  "home/fetchSinglePost",
  async (postid) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postid}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchCurrentPostAuthor = createAsyncThunk(
  "home/fetchCurrentPostAuthor",
  async (postid) => {
    try {
      const { data } = await axios.get(
        ` https://jsonplaceholder.typicode.com/users?id=${postid}`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchCurrentPostComments = createAsyncThunk(
  "home/fetchCurrentPostComments",
  async (postid) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addFavPost: (state, { payload }) => {
      state.favPosts.push(payload);
    },
    removeFavPost: (state, { payload }) => {
      state.favPosts = state.favPosts.filter((post) => post?.id != payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchSinglePost.pending, (state) => {
        state.isCurrentPostLoading = true;
      })
      .addCase(fetchSinglePost.fulfilled, (state, { payload }) => {
        state.isCurrentPostLoading = false;
        state.currentPost = payload;
      })
      .addCase(fetchCurrentPostAuthor.fulfilled, (state, { payload }) => {
        state.currentPostAuthor = payload;
      })
      .addCase(fetchCurrentPostComments.pending, (state) => {
        state.isCurrentPostCommentsLoading = true;
      })
      .addCase(fetchCurrentPostComments.fulfilled, (state, { payload }) => {
        state.isCurrentPostCommentsLoading = false;
        state.currentPostComments = payload;
      });
  },
});

export const { addFavPost, removeFavPost } = blogSlice.actions;
export default blogSlice.reducer;
