import Cors from 'cors';
import initMiddleware from '@lib/init-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

const defaultMethods = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];

export async function useCors(req: NextApiRequest, res: NextApiResponse, methods?: Method[]): Promise<void> {
  // Initialize the cors middleware
  const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      methods: methods ? methods : defaultMethods,
    })
  );

  return await cors(req, res);
}
