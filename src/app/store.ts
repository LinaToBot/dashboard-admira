// libraries.
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// slices.
import counterReducer from "../features/counter/counterSlice";
import analyticsReducer from "../app/analyticsData/analyticsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    analytics: analyticsReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
