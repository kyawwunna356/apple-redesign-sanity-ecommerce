// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SanityClient } from "../../utils/utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await SanityClient.fetch(`*[_type == "products"]{
    _id,
    ...,
    category->{
      title,
      slug,
      _id
    }
  }
  `);
  res.status(200).json(data);
}
