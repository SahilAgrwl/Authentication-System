import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secretKey = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxODE5ODIxNSwiaWF0IjoxNzE4MTk4MjE1fQ.D5wUaGIDiFEpyJdi70pDF3VfRyViYa_XJwaKcFkg3ac';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  // Dummy user validation
  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token, user: { username } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
