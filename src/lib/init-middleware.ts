// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type MiddlewareTypes = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: any) => any
) => void;

export default function initMiddleware(
  middleware: MiddlewareTypes
): NextApiHandler {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
