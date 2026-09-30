export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>meow</title>
  
  <!-- Discord берёт это для превью -->
  <meta property="og:image" content="https://ggif-iota.vercel.app/fake.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="1200">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://ggif-iota.vercel.app/fake.png">
  
  <style>
    body { margin: 0; background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    img { max-width: 100%; max-height: 100vh; }
  </style>
</head>
<body>
  <!-- А это показывается в браузере при клике -->
  <img src="/real.png" alt="">
</body>
</html>
  `;
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).send(html);
}
