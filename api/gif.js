export default function handler(req, res) {
  const ua = req.headers['user-agent'] || 'НЕТ UA';
  const ip = req.headers['x-forwarded-for'] || 'НЕТ IP';
  console.log('UA:', ua);
  console.log('IP:', ip);
  res.status(200).json({ ua, ip });
}
