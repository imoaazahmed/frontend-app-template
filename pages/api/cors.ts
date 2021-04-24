import { useCors } from '@hooks/use-cors';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run cors
  await useCors(req, res);

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' });
}
