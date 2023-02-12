"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.resetSkill = exports.skillSlice = exports.getSkills = exports.createSkill = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _skillsService = _interopRequireDefault(require("./skillsService"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  skills: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}; // Create new Skill

var createSkill = (0, _toolkit.createAsyncThunk)('skills/create', function _callee(skillData, thunkAPI) {
  var token, message;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = thunkAPI.getState().auth.user.token;
          _context.next = 4;
          return regeneratorRuntime.awrap(_skillsService["default"].createSkill(skillData, token));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          message = _context.t0.response && _context.t0.response.data && _context.t0.response.data.message || _context.t0.message || _context.t0.toString();
          return _context.abrupt("return", thunkAPI.rejectWithValue(message));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Get user Skills

exports.createSkill = createSkill;
var getSkills = (0, _toolkit.createAsyncThunk)('skills/getAll', function _callee2(_, thunkAPI) {
  var token, message;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = thunkAPI.getState().auth.user.token;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_skillsService["default"].getSkill(token));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log('lol you are crazy ');
          message = _context2.t0.response && _context2.t0.response.data && _context2.t0.response.data.message || _context2.t0.message || _context2.t0.toString();
          return _context2.abrupt("return", thunkAPI.rejectWithValue(message));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.getSkills = getSkills;
var skillSlice = (0, _toolkit.createSlice)({
  name: 'skills',
  initialState: initialState,
  reducers: {
    resetSkill: function resetSkill(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, createSkill.pending, function (state) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, createSkill.fulfilled, function (state, action) {
    state.isLoading = false;
    state.isSuccess = true;
    state.message = action.payload.message;
  }), _defineProperty(_extraReducers, createSkill.rejected, function (state, action) {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  }), _defineProperty(_extraReducers, getSkills.pending, function (state) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, getSkills.fulfilled, function (state, action) {
    state.isLoading = false;
    state.isSuccess = true;
    state.skills = action.payload;
  }), _defineProperty(_extraReducers, getSkills.rejected, function (state, action) {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  }), _extraReducers)
});
exports.skillSlice = skillSlice;
var resetSkill = skillSlice.actions.resetSkill;
exports.resetSkill = resetSkill;
var _default = skillSlice.reducer;
exports["default"] = _default;