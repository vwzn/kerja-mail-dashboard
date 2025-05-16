const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("✅ Terhubung ke database MySQL!");
        const users = await prisma.user.findMany();
        console.log("Daftar user:", users);
    } catch (error) {
        console.error("❌ Gagal terhubung:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection();