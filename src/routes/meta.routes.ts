import { Router } from "express";
import { prisma } from "../config/prisma";
import { redis } from "../config/redis";
import { deflateSync } from "bun";



export const router = Router()

router.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        await redis.ping()
        return res.json({
            status: 'OK',
            uptime: process.uptime()
        })
    } catch (err) {
        return res.status(500).json({ status: "error", error: err });
    }
})

router.get('/metrics', async(req, res) => {
    const userCount = await prisma.user.cound()

    const sessionCount = await prisma.interviewSession.count()

    return res.json({
        users: userCount,
        sessions: sessionCount,
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage()
    })
})


export default router;