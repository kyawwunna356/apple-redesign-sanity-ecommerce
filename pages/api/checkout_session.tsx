import { NextApiRequest, NextApiResponse } from "next";
import { urlFor } from "../../utils/utils";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler( 
    req: NextApiRequest,
    res: NextApiResponse) {
  if (req.method === 'POST') {
    const items: Product[] = req.body.items
    const transformItems = items.map(item => ({
      price_data : {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [urlFor(item.image.asset._ref).url()],
        },
        unit_amount: Number(item.price) * 100
      },
      quantity: 1
    }))
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
      });

      res.status(200).json(session);
    } catch (err) {
      const errorMessage = (err instanceof Error) ? err.message : 'internal server error'
      res.status(500).json(errorMessage);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}