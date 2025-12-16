import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    // Basic validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>We Received Your Project Inquiry</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for reaching out! Here are the details you submitted:</p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>

        <br />
        <p>We’ll get back to you shortly.</p>

        <hr />
        <p style="font-size: 12px; color: #666;">
          This email was automatically generated. Please do not reply.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Project Inquiry" <${process.env.EMAIL_USER}>`,
      to: email, // Send to received email
      subject: "Your project inquiry has been received",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
