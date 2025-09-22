import { sendEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const hash = req.headers.get('x-paystack-signature');

  // console.log('webhook body =>>', req.body);
  const body = await req.json();  
  
  const crypto = await import('crypto');
  const calculatedHash = crypto
    .createHmac('sha512', secret!)
    .update(JSON.stringify(body))
    .digest('hex');

  if (hash !== calculatedHash) {
    return NextResponse.json(
      { success: false, message: 'Invalid signature.' },
      { status: 400 }
    );
  }

  const event = body;

  // Handle Paystack event
  if (event.event === 'charge.success') {
    // console.log('Payment successful:', event.data);
    const metadata = event.data.metadata;
    const email = metadata.email;
    const plan = metadata.plan;
    const amount = event.data.amount;
    const name = metadata.lastName;
    const fullName = `${metadata.firstName} ${metadata.lastName}`;

    // Process metadata, notify user, etc.

    await sendEmail({
      to: process.env.CONTACT_ADMIN as string,
      subject: 'Subscription Payment Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #007bff;">Subscription Payment Confirmation</h2>
          <p>Dear ${fullName},</p>
          <p>We have successfully received a subscription payment. Below are the transaction details:</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px 0;">
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
              <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
              <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><strong>Plan:</strong></td>
              <td style="border: 1px solid #ddd; padding: 8px;">${plan}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;"><strong>Amount:</strong></td>
              <td style="border: 1px solid #ddd; padding: 8px;">₦${(amount / 100).toLocaleString()}</td>
            </tr>
          </table>
          <p>If you have any questions or require further details, please feel free to reach out.</p>
          <p>Best regards,<br><strong>Help Station</strong></p>
        </div>
      `,
    });
    
  }

  return NextResponse.json({ success: true });
}
