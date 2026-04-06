const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = server;
