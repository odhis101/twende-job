"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = process.env.REACT_APP_API_URL; // Register user

var register = function register(userData) {
  var response;
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(API_URL, "/users/users/"), userData));

        case 2:
          response = _context.sent;

          if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }

          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Login user


var login = function login(userData) {
  var response;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(API_URL, "/users/login"), userData));

        case 2:
          response = _context2.sent;

          //const response = await axios.post("http://localhost:5000/users/login", userData)
          if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
          } else {
            console.log('something went wrong');
          }

          return _context2.abrupt("return", response.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var updateUser = function updateUser(userData) {
  var response;
  return regeneratorRuntime.async(function updateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:5000/users/updateUser", userData));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Logout user


var logout = function logout() {
  localStorage.removeItem('user');
};

var authService = {
  register: register,
  updateUser: updateUser,
  logout: logout,
  login: login
};
var _default = authService;
exports["default"] = _default;