
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  

  if (userAgent.includes('Discordbot')) {
    return res.redirect(307, '/fake.png');
  }
  

  return res.redirect(307, '/real.png');
}
