"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerData = void 0;
const header_service_1 = require("../../services/public/header.service");
const headerData = async (_req, res) => {
    try {
        const data = await (0, header_service_1.getHeaderData)();
        res.json({ success: true, data });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.headerData = headerData;
