import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const hash = req.headers.get('x-paystack-signature');

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
    console.log('Payment successful:', event.data);
    // Process metadata, notify user, etc.
  }

  return NextResponse.json({ success: true });
}
