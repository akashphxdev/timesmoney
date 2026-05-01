"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Global Middleware
const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || [];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true); // Postman / mobile apps
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        else {
            return callback(new Error('CORS not allowed'));
        }
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Uploads folder static serve
app.use('/uploads', express_1.default.static(path_1.default.join(process.cwd(), 'uploads')));
// All Routes
app.use('/api', index_1.default);
// Base Route
app.get('/', (req, res) => {
    res.json({ message: 'TimesMoney API is working...!' });
});
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});
exports.default = app;
