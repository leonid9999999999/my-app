import sendMail from "../services/mailingService.js";

const createMail = async (req, res) => {
    try {
        const {
            fullName,
            companyName,
            email,
            bookingMessage,
            phoneNumber
        } = req.body;

        await sendMail(email, fullName, bookingMessage, companyName, phoneNumber);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Email sending failed"
        });
    }
};

export default createMail;
