import { useCors } from '@hooks/use-cors';
import { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  name: string
}

export default async function hello(req: NextApiRequest, res: NextApiResponse<TData>): Promise<void> {
  // Run cors
  await useCors(req, res);

  res.status(200).json({ name: 'John Doe' })
}
