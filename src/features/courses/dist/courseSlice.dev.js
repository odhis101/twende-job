"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.reset = exports.courseSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

// src/features/courses/courseSlice.js
// Initial state
var initialState = {
  courses: [],
  userCourses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}; // Create a course slice

var courseSlice = (0, _toolkit.createSlice)({
  name: 'courses',
  initialState: initialState,
  reducers: {
    reset: function reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    } // In a real app, you would have more actions here
    // like tracking course progress, etc.

  },
  extraReducers: function extraReducers(builder) {// In a real app with API integration, you would add cases here
    // for handling async actions
  }
});
exports.courseSlice = courseSlice;
var reset = courseSlice.actions.reset;
exports.reset = reset;
var _default = courseSlice.reducer;
exports["default"] = _default;