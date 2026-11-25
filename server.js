const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = Number(process.env.PORT || 8789);
const root = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog", "movie", "cine_library.json"), "utf8"));

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") { res.writeHead(204); return res.end(); }
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;
  if (pathname === "/manifest.json") return res.end(JSON.stringify(manifest));
  if (pathname === "/catalog/movie/cine_library.json") return res.end(JSON.stringify(catalog));
  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Cine by TheAnhDepTrai running: http://localhost:${PORT}/manifest.json`);
});
