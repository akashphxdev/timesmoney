"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugParamSchema = void 0;
const zod_1 = require("zod");
exports.slugParamSchema = zod_1.z.object({
    slug: zod_1.z
        .string()
        .min(1, 'Slug required hai')
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
});
