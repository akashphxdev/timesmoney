"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settingController_1 = require("../../controllers/public/settingController");
const router = (0, express_1.Router)();
router.get('/', settingController_1.getSettingsHandler);
exports.default = router;
