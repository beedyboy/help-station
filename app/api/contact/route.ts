import { sendEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
  }

  try {
    await sendEmail({
      to: process.env.CONTACT_ADMIN as string,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
