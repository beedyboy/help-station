import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, country } = await req.json();

  if (!email || !country) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    await sendEmail({
      to: process.env.CONTACT_ADMIN as string,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
