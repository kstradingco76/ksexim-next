import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Save to Database
    const contact = await Contact.create(body);

    // Send Email via Nodemailer
    // Only send if environment variables are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "kstradingco76@gmail.com",
        subject: `New Contact Enquiry from ${body.fullName}`,
        text: `
          You have received a new message from the contact form:
          
          Name: ${body.fullName}
          Email: ${body.email}
          Mobile: ${body.mobileNumber}
          Message: ${body.message}
        `,
        html: `
          <h3>New Contact Enquiry</h3>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Mobile:</strong> ${body.mobileNumber}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Skipping email send: EMAIL_USER or EMAIL_PASS not set.");
    }

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // Fetch data with pagination
    const total = await Contact.countDocuments();
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json(
      {
        success: true,
        data: contacts,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

