"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPoligonoController = exports.returnMsg = void 0;
const createPoligono_service_1 = require("../services/createPoligono.service");
const returnMsg = (req, res) => {
    const response = {
        status: '200',
        message: 'Bem vindo a API GeoPoly!'
    };
    console.log(response);
    return res.status(200).json(response);
};
exports.returnMsg = returnMsg;
class createPoligonoController {
    returnAuth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new createPoligono_service_1.CreatePoligono();
            const result = yield service.execute(req, res);
            return result;
        });
    }
}
exports.createPoligonoController = createPoligonoController;
