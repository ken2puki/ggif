import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  

  const file = ua.includes('Discordbot') ? 'real.png' : 'fake.png';
  
  const filePath = path.join(process.cwd(), 'public', file);
  const image = fs.readFileSync(filePath);
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.status(200).send(image);
}
