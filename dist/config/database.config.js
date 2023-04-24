"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize("GEO", "teste", "teste", {
    host: '172.17.0.1',
    dialect: 'postgres'
});
exports.default = sequelize;
