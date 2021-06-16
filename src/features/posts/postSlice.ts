import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchPosts } from "api/posts";
import { RootState } from "app/rootReducer";
import { AppThunk, AppDispatch } from "app/store";
import { Post } from "./types";

export const initialState: Post[] = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts(state, action: PayloadAction<Post[]>) {
      return action.payload;
    }
  }
});

export const loadPostsAction = postSlice.actions.loadPosts;

export const loadPosts = (): AppThunk => async (dispatch: AppDispatch) => {
  const posts: Post[] = await fetchPosts();

  dispatch(loadPostsAction(posts));
};

export const selectPosts = (state: RootState): Post[] => state.posts;
export const selectPostsByOtherUsers = (state: RootState): Post[] => {
  if (!state.auth || !state.auth.currentUser || !state.auth.currentUser.id) {
    return state.posts;
  }

  const currentUserId: number = state.auth.currentUser.id;
  const postsByOtherUsers: Post[] = state.posts.filter(
    post => post.userId !== currentUserId
  );

  return postsByOtherUsers;
};
export const selectPostsByCurrentUser = (state: RootState): Post[] => {
  if (!state.auth || !state.auth.currentUser || !state.auth.currentUser.id) {
    return [];
  }

  const currentUserId: number = state.auth.currentUser.id;
  const postsByCurrentUser: Post[] = state.posts.filter(
    post => post.userId === currentUserId
  );

  return postsByCurrentUser;
};

export default postSlice.reducer;
