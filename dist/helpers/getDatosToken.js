"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datosToken = void 0;
var jwt = require('jsonwebtoken');
var datosToken = function datosToken(token) {
  var dataToken = jwt.decode(token);
  return [dataToken.id, dataToken.id2];
};
exports.datosToken = datosToken;