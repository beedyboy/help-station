import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const hash = req.headers['x-paystack-signature'];

    const crypto = await import('crypto');
    const calculatedHash = crypto
      .createHmac('sha512', secret!)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (hash !== calculatedHash) {
      return res.status(400).json({ success: false, message: 'Invalid signature.' });
    }

    const event = req.body;

    // Handle Paystack event
    if (event.event === 'charge.success') {
      console.log('Payment successful:', event.data);
      // Process metadata, notify user, etc.
    }

    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
