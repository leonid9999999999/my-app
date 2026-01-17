import express from "express";
import rateLimit from "express-rate-limit"; 

const createBookingLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 1, 
    message: {
        message: "Too many bookings created from this IP, please try again after an hour"
    },
    standardHeaders: true, // Возвращает информацию о лимите в заголовках (RateLimit-*)
    legacyHeaders: false, // Отключает старые заголовки (X-RateLimit-*)
});

export default createBookingLimiter