import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, amount, metadata, callback_url } = await req.json();

  console.log({ email, amount, metadata, });
  if (!email || !amount || !metadata) {
    return NextResponse.json({ success: false, message: 'Invalid payment data.' }, { status: 400 });
  }
  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        metadata,
        currency: 'NGN',
        callback_url
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Paystack Error:', data);
      return NextResponse.json({ success: false, message: data.message }, { status: response.status });
    }

    return NextResponse.json({ success: true, data: data.data });
  } catch (error) {
    console.error('Payment Initialization Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to initiate payment.' }, { status: 500 });
  }
}
