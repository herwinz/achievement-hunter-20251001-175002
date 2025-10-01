// GitHub Achievement Hunter - DevOps Application
// Author: Herwindra Berlian

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <h1>🏆 GitHub Achievement Hunter</h1>
    <p>DevOps automation project by Herwindra Berlian</p>
    <p>Status: ✅ Running successfully!</p>
    <p>Achievements unlocked: 🎯 Quickdraw, 👥 Pair Extraordinaire, 🦈 Pull Shark, 🎲 YOLO</p>
  `);
});

server.listen(port, () => {
  console.log(`🚀 Achievement Hunter app running on port ${port}`);
});
