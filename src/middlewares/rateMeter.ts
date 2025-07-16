import rateLimit from "express-rate-limit";


export const rateMeter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too Many  request from this IP, Please try again later.'
})