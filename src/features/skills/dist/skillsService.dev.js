"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = process.env.REACT_APP_API_URL;

var createSkill = function createSkill(skillData, token) {
  var config, response;
  return regeneratorRuntime.async(function createSkill$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // create a post request to the endpoint 
          config = {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/skills/postSkill", skillData, config));

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

var getSkill = function getSkill() {
  var response;
  return regeneratorRuntime.async(function getSkill$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:5000/skills/getSkill"));

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

var skillService = {
  createSkill: createSkill,
  getSkill: getSkill
};
var _default = skillService;
exports["default"] = _default;