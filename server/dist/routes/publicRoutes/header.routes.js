"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const header_controller_1 = require("../../controllers/public/header.controller");
const router = (0, express_1.Router)();
router.get('/', header_controller_1.headerData);
exports.default = router;
