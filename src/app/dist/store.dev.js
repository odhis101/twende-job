"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));

var _jobSclice = _interopRequireDefault(require("../features/jobs/jobSclice"));

var _mpesaSlices = _interopRequireDefault(require("../features/mpesa/mpesaSlices"));

var _subscriptionSlice = _interopRequireDefault(require("../features/subscriptions/subscriptionSlice"));

var _updateUserSlice = _interopRequireDefault(require("../features/updateUser/updateUserSlice"));

var _skillSlice = _interopRequireDefault(require("../features/skills/skillSlice"));

var _courseSlice = _interopRequireDefault(require("../features/courses/courseSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    jobs: _jobSclice["default"],
    mpesa: _mpesaSlices["default"],
    subscriber: _subscriptionSlice["default"],
    auth: _authSlice["default"],
    update: _updateUserSlice["default"],
    skills: _skillSlice["default"],
    courses: _courseSlice["default"]
  }
});
exports.store = store;