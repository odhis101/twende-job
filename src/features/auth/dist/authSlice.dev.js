"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.reset = exports.authSlice = exports.verify = exports.updateUser = exports.logout = exports.login = exports.register = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authService = _interopRequireDefault(require("./authService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Get user from localStorage
var user = JSON.parse(localStorage.getItem('user'));
var initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}; // Register user

var register = (0, _toolkit.createAsyncThunk)('auth/register', function _callee(user, thunkAPI) {
  var message;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_authService["default"].register(user));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          message = _context.t0.response && _context.t0.response.data && _context.t0.response.data.message || _context.t0.message || _context.t0.toString();
          return _context.abrupt("return", thunkAPI.rejectWithValue(message));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); // Login user

exports.register = register;
var login = (0, _toolkit.createAsyncThunk)('auth/login', function _callee2(user, thunkAPI) {
  var message;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_authService["default"].login(user));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          message = _context2.t0.response && _context2.t0.response.data && _context2.t0.response.data.message || _context2.t0.message || _context2.t0.toString();
          return _context2.abrupt("return", thunkAPI.rejectWithValue(message));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
exports.login = login;
var logout = (0, _toolkit.createAsyncThunk)('auth/logout', function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_authService["default"].logout());

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.logout = logout;
var updateUser = (0, _toolkit.createAsyncThunk)('auth/update', function _callee4(user, thunkAPI) {
  var message;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_authService["default"].updateUser(user));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          message = _context4.t0.response && _context4.t0.response.data && _context4.t0.response.data.message || _context4.t0.message || _context4.t0.toString();
          return _context4.abrupt("return", thunkAPI.rejectWithValue(message));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); // Verify user

exports.updateUser = updateUser;
var verify = (0, _toolkit.createAsyncThunk)('auth/verify', function _callee5(otp, thunkAPI) {
  var response, message;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_authService["default"].verify(otp));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          message = _context5.t0.response && _context5.t0.response.data && _context5.t0.response.data.message || _context5.t0.message || _context5.t0.toString();
          return _context5.abrupt("return", thunkAPI.rejectWithValue(message));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.verify = verify;
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {
    reset: function reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.isVerified = false;
      state.verifyError = '';
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase('auth/verifyOTP', function (state) {
      state.isVerified = true;
    }).addCase(register.pending, function (state) {
      state.isLoading = true;
    }).addCase(register.fulfilled, function (state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    }).addCase(register.rejected, function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }).addCase(updateUser.pending, function (state) {
      state.isLoading = true;
    }).addCase(updateUser.fulfilled, function (state, action) {
      state.isLoading = false;
      state.isSuccess = true;
    }).addCase(updateUser.rejected, function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    }).addCase(login.pending, function (state) {
      state.isLoading = true;
    }).addCase(login.fulfilled, function (state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    }).addCase(login.rejected, function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }).addCase(logout.fulfilled, function (state) {
      state.user = null;
    }).addCase(verify.pending, function (state) {
      state.isLoading = true;
      state.isVerified = false;
      state.verifyError = '';
    }).addCase(verify.fulfilled, function (state, action) {
      state.isLoading = false;
      state.isVerified = true;
    }).addCase(verify.rejected, function (state, action) {
      state.isLoading = false;
      state.verifyError = action.payload;
    });
  }
});
exports.authSlice = authSlice;
var reset = authSlice.actions.reset;
exports.reset = reset;
var _default = authSlice.reducer;
exports["default"] = _default;