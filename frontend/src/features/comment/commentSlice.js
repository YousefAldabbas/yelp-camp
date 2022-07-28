import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";
const initialState = {
  comments: [],
  comment: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
};

export const getComments = createAsyncThunk(
  "comment/getComments",
  async (id, { rejectWithValue }) => {
    try {
      return await commentService.getComments(id);

    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (data, thunkAPI ) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await commentService.postComment(data,token);

    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (id, { rejectWithValue }) => {
    try {
      return await commentService.deleteComment(id);

    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => {
      state.comments = [];
      state.comment = {};
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(postComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(deleteComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
