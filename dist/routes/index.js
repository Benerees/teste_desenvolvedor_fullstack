"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPoligono_controller_1 = require("../controllers/createPoligono.controller");
const router = (0, express_1.Router)();
router.get('/v1', createPoligono_controller_1.returnMsg);
router.post('/v1/auth', new createPoligono_controller_1.createPoligonoController().returnAuth);
exports.default = router;
