const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingContoller.js')
const rateLimit = require('express-rate-limit'); 

const createBookingLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 5, 
    message: {
        message: "Too many bookings created from this IP, please try again after an hour"
    },
    standardHeaders: true, // Возвращает информацию о лимите в заголовках (RateLimit-*)
    legacyHeaders: false, // Отключает старые заголовки (X-RateLimit-*)
});

router.post('/createBooking', createBookingLimiter, createBooking);


module.exports = router;