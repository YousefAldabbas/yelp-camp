import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "../features/auth/authSlice";
import CampReducer from "../features/camp/campSlice";
import CommentReducer from "../features/comment/commentSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    camp: CampReducer,
    comment: CommentReducer,
  },
});
