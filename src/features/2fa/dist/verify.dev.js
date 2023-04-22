"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setVerified = exports.verifySlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  isVerified: false
};
var verifySlice = (0, _toolkit.createSlice)({
  name: 'verify',
  initialState: initialState,
  reducers: {
    setVerified: function setVerified(state, action) {
      state.isVerified = action.payload;
    }
  }
});
exports.verifySlice = verifySlice;
var setVerified = verifySlice.actions.setVerified;
exports.setVerified = setVerified;
var _default = verifySlice.reducer;
exports["default"] = _default;