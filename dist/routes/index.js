"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
router.get('/v1', index_controller_1.returnMsg);
router.post('/v1/auth', index_controller_1.returnAuth);
exports.default = router;
