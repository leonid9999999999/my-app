import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../config/config.env" });

const sendMail = async (userEmail, fullName, bookingMessage, companyName, phoneNumber) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        });

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: userEmail,
            subject: "Booking Confirmation",
            text: `
                Hello ${fullName},

                Thank you for choosing VB Secure Software Solutions.

                Company: ${companyName}

                Your Message:
                ${bookingMessage}

                We look forward to responding to you!
                
                Kind Reagards
                
                Tim
                `,
            attachments: [
                {
                    filename: "logo.png",
                    path: "https://res.cloudinary.com/dibygfenr/image/upload/v1769060946/2026-01-22_05.48.09_t1yoim.jpg",
                    cid: "companyLogo"
                }
            ]
        };

        const emailUs = {
            from: process.env.AUTH_EMAIL,
            to: userEmail,
            subject: "New Booking",
            text: `
                User name ${fullName},

                Thank you for choosing VB Secure Software Solutions.

                Company Name: ${companyName}

                Their Message:
                ${bookingMessage}

                Phone Number ${phoneNumber}
                `
            
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(emailUs);
        console.log("Email sent");
    } catch (error) {
        console.error("Mail error:", error.message);
        throw error;
    }
};

export default sendMail;
