// src/features/courses/courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  courses: [],
  userCourses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create a course slice
export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    // In a real app, you would have more actions here
    // like tracking course progress, etc.
  },
  extraReducers: (builder) => {
    // In a real app with API integration, you would add cases here
    // for handling async actions
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;