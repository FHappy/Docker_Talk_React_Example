import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCurrentUser } from "api/auth";
import { AppThunk, AppDispatch } from "app/store";
import { User } from "./types";
import { RootState } from "app/rootReducer";

interface AuthState {
  currentUser: User | null;
}

export const initialState: AuthState = {
  currentUser: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    }
  }
});

export const setCurrentUserAction = authSlice.actions.setCurrentUser;

export const setCurrentUser = (): AppThunk => async (dispatch: AppDispatch) => {
  const currentUser = await fetchCurrentUser();

  dispatch(setCurrentUserAction(currentUser));
};

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;
