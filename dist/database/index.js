"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _conection = require("./conection");
Object.keys(_conection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _conection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conection[key];
    }
  });
});
var _querys = require("./querys");
Object.keys(_querys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _querys[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _querys[key];
    }
  });
});