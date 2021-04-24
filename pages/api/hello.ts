import { useCors } from '@hooks/use-cors';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  // Run cors
  await useCors(req, res);

  res.status(200).json({ message: 'Hello' });
}
