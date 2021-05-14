import Cors from 'cors';
import initMiddleware from '@lib/init-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

type Methods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export async function useCors(
  req: NextApiRequest,
  res: NextApiResponse,
  methods?: Methods[]
): Promise<void> {
  // Initialize the cors middleware
  const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET, POST by default
      methods: methods ? methods : ['GET', 'POST'],
    })
  );

  return await cors(req, res);
}
