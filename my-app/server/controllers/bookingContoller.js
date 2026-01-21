import Booking from "../schemas/booking.js";
import validator from "validator"; 

class BookingController {
    // Helper function to sanitize input
    // It converts any input into a safe string to prevent attacks
    sanitizeInput(input) {
        // 1. If input is not a string (e.g., hacker sent an object or null), return empty string
        // This prevents NoSQL injection attacks where objects are sent instead of strings
        if (typeof input !== 'string') {
            return '';
        }
        // 2. trim() removes whitespace from both ends
        // 3. escape() converts characters like <script> into &lt;script&gt; (XSS protection)
        return validator.escape(input.trim());
    }
    createBooking = async (req, res) => {
        try {
            // Get "dirty" (raw) data from request body
            const {
                fullName,
                companyName,
                email,
                bookingMessage,
                phoneNumber,
            } = req.body;
            // --- SECURITY BLOCK ---
            // 1. Strict type check: If someone sent an object instead of a string, it is likely an attack.
            // Although Mongoose might cast it, it is safer to reject the request immediately.
            if (
                typeof fullName !== 'string' ||
                typeof companyName !== 'string' ||
                typeof email !== 'string' ||
                typeof phoneNumber !== 'string'
            ) {
                return res.status(400).json({ error: "Invalid data format. No objects allowed." });
            }
            // 2. Data Sanitization
            // We clean every field before using it
            const cleanFullName = this.sanitizeInput(fullName);
            const cleanCompanyName = this.sanitizeInput(companyName);
            const cleanEmail = validator.normalizeEmail(email); // Normalizes email (e.g., lowercase)
            const cleanPhone = this.sanitizeInput(phoneNumber);

            // Message is optional, so we default to "" if undefined
            // Escaping here ensures no malicious scripts can be stored in the message
            const cleanMessage = this.sanitizeInput(bookingMessage || "");
            // --- END OF SECURITY BLOCK ---
            // Check for empty fields AFTER sanitization 
            // (e.g., if a user sent only spaces "   ", sanitizeInput turned it into "", so we catch it here)
            if (!cleanFullName || !cleanCompanyName || !cleanEmail || !cleanPhone) {
                return res.status(400).json({ error: "Missing required fields or invalid data" });
            }
            // Additional Email validation (checks if format is valid like a@b.com)
            if (!validator.isEmail(cleanEmail)) {
                return res.status(400).json({ error: "Invalid email address" });
            }
            // Create booking instance with CLEAN data
            const booking = new Booking({
                fullName: cleanFullName,
                companyName: cleanCompanyName,
                email: cleanEmail,
                bookingMessage: cleanMessage,
                phoneNumber: cleanPhone,
            });
            // Save booking into database
            await booking.save();

            return res.status(201).json({
                success: true,
                data: booking,
                message: "Good job, Booking submitted"
            });
        } catch (error) {
            console.error("Error in createBooking:", error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
}
const bookingController = new BookingController();
export const createBooking = bookingController.createBooking;