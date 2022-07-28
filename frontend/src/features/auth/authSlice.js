import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isAuthenticated: !!user,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
};

//login user
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      return await authService.login(data);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//register user
export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      return await authService.register(data);
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//logout user
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await authService.logout();
    } catch (error) {
      const message =
        (error.response & error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    reset: (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
        },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
