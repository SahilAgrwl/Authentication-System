import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secretKey = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxODE5ODIxNSwiaWF0IjoxNzE4MTk4MjE1fQ.D5wUaGIDiFEpyJdi70pDF3VfRyViYa_XJwaKcFkg3ac';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey) as { username: string };
    res.status(200).json({ user: { username: decoded.username } });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
