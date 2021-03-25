import { NextApiRequest, NextApiResponse } from 'next'
import Ably from "ably/promises";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY!);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "agus-chatapp",
  });
  res.status(200).json(tokenRequestData);
}
