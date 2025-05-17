import express from "express";
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Inisialisasi
dotenv.config();
const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));