import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message,phone,bookReel } = await req.json();

    if (!name || !email || !projectType || !message || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    // console.log({ name, email, projectType, message,phone,bookReel });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

  //   /* =========================
  //      1️⃣ EMAIL TO ADMIN
  //   ========================== */
    const adminTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Want to book show reel presentation:</strong> ${projectType ? "Yes": "No"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;
    // console.log(adminTemplate);
    await transporter.sendMail({
      from: `"Project Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // 👈 admin email
      subject: "New Project Inquiry Received",
      html: adminTemplate,
    });

  //   /* =========================
  //      2️⃣ EMAIL TO USER
  //   ========================== */
    const userTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>We Received Your Project Inquiry</h2>
        <p>Hi <strong>${name}</strong>,</p>

        <p>Thank you for reaching out! Here are the details you submitted:</p>

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

    await transporter.sendMail({
      from: `"Project Inquiry" <${process.env.EMAIL_USER}>`,
      to: email, // 👈 user email
      subject: "Your project inquiry has been received",
      html: userTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
  return NextResponse.json({success:true});
}
