"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var database_config_1 = __importDefault(require("./config/database.config"));
var User_controller_1 = require("./controllers/User.controller");
setTimeout(function () {
    database_config_1.default.sync().then(function () {
        new User_controller_1.UserController().createUsuario();
    });
}, 1000);
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(4000, function () { return console.log("Serverver is running"); });
