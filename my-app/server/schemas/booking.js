const mongoose = require("mongoose");
const { connectDB } = require("../config/dbConnect");

// model for services
const bookingSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true},
    bookingMessage: { type: String },
    phoneNumber: { type: String, required: true },
},
    {
        collection: 'bookings',
        timestamps: true
    });


const Booking =
    mongoose.models.bookings ||
    mongoose.model("bookings", bookingSchema);

module.exports = Booking;