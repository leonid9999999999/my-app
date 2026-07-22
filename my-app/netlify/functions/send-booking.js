const { Resend } = require("resend");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Use POST" }),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: "Email service is not configured" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const {
      fullName,
      email,
      companyName,
      phoneNumber,
      bookingMessage,
      serviceTitle,
    } = data;

    if (!fullName || !email || !companyName || !phoneNumber) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    const receiverEmail =
      process.env.RECEIVER_EMAIL || "vbsecuresolutions@gmail.com";
    const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";

    const emailBody = `
New booking request${serviceTitle ? ` - ${serviceTitle}` : ""}

Name: ${fullName}
Email: ${email}
Company: ${companyName}
Phone: +44 ${phoneNumber}

Message:
${bookingMessage || "(no message)"}
    `.trim();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `New Booking: ${fullName}${serviceTitle ? ` - ${serviceTitle}` : ""}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: error.message || "Failed to send email",
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Booking submitted successfully",
      }),
    };
  } catch (err) {
    console.error("Handler error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: err.message || "Internal server error",
      }),
    };
  }
};
