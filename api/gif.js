export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  
  if (ua.includes('Discordbot') || ua.includes('discord')) {
    return res.redirect(307, '/fake.png');
  }
  
  return res.redirect(307, '/real.png');
}
