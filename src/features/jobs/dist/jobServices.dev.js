"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = process.env.REACT_APP_API_URL; //console.log("here is the env",process.env.REACT_APP_API_URL)

var createGoal = function createGoal(goalData, token) {
  var config, response;
  return regeneratorRuntime.async(function createGoal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config = {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(API_URL, "/jobs/setJob"), goalData, config));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getGoals = function getGoals() {
  var response;
  return regeneratorRuntime.async(function getGoals$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/jobs/getjobs")));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getOneGoal = function getOneGoal(goalId) {
  var response;
  return regeneratorRuntime.async(function getOneGoal$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/jobs/getjobs/").concat(goalId)));

        case 2:
          response = _context3.sent;
          console.log(response);
          return _context3.abrupt("return", response.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Delete user goal


var deleteGoal = function deleteGoal(goalId, token) {
  var config;
  return regeneratorRuntime.async(function deleteGoal$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          config = {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          };

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/*
  // get goal from a file 
  const getManyGoals = async () => {
    

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}
*/


var goalService = {
  createGoal: createGoal,
  getGoals: getGoals,
  deleteGoal: deleteGoal,
  getOneGoal: getOneGoal
};
var _default = goalService;
exports["default"] = _default;