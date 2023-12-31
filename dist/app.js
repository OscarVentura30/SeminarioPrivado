"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cookieParser = require('cookie-parser');
var app = (0, _express["default"])();

//HBS
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// archivos estaticos

app.use(_express["default"]["static"]('public'));

//ajustes

app.set('port', _config["default"].port);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/partials');

//middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(cookieParser());
var _default = app;
exports["default"] = _default;