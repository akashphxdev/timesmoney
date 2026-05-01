"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("./db");
const seed = async () => {
    const passwordHash = await bcryptjs_1.default.hash('Admin@123', 10);
    const admin = await db_1.prisma.cmsAdmin.upsert({
        where: { email: 'admin@timesmoney.com' },
        update: {},
        create: {
            name: 'Super Admin',
            email: 'admin@timesmoney.com',
            passwordHash,
            role: 'SUPER_ADMIN',
            isActive: true
        }
    });
    console.log('✅ Admin created:', admin.email);
    await db_1.prisma.$disconnect();
    process.exit(0);
};
seed().catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
});
