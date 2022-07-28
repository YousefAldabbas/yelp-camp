import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import campService from "./campService";

const initialState = {
  campgrounds: [],
  campground: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
};

export const getCamps = createAsyncThunk(
  "camp/getCamps",
  async (_, { rejectWithValue }) => {
    try {
      return await campService.getCamps();
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const getCamp = createAsyncThunk(
  "camp/getCamp",
  async (id, { rejectWithValue }) => {
    try {
      return await campService.getCamp(id);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const createCamp = createAsyncThunk(
  "camp/createCamp",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await campService.createCamp(data, token);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCamp = createAsyncThunk(
  "camp/updateCamp",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await campService.updateCamp(id, data);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const deleteCamp = createAsyncThunk(
  "camp/deleteCamp",
  async (id, { rejectWithValue }) => {
    try {
      return await campService.deleteCamp(id);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const campSlice = createSlice({
  name: "camp",
  initialState,
  reducers: {
    reset: (state) => {
      state.campgrounds = [];
      state.campground = {};
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCamps.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(getCamps.fulfilled, (state, action) => {

        state.campgrounds = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(getCamps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(getCamp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(getCamp.fulfilled, (state, action) => {
        state.campground = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(getCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(createCamp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createCamp.fulfilled, (state, action) => {
        state.campground = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(createCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(updateCamp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateCamp.fulfilled, (state, action) => {
        state.campgrounds = state.campgrounds.map((camp) => {
          if (camp._id === action.payload._id) {
            return action.payload;
          }
          return camp;
        });
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(updateCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      .addCase(deleteCamp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(deleteCamp.fulfilled, (state, action) => {
        state.campgrounds = state.campgrounds.filter((camp) => {
          return camp._id !== action.payload._id;
        });
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(deleteCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = campSlice.actions;
export default campSlice.reducer;
