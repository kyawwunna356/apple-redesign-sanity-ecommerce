import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "next-sanity";
import { SanityClient } from "../../utils/utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await SanityClient.fetch('*[_type == "category"]');
  console.log(categories);
  res.status(200).json(categories);
}
