const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    // Ana Sayfa
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>");
  } else if (url === "/hakkimda") {
    // Hakkımda Sayfası
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>");
  } else if (url === "/iletisim") {
    // İletişim Sayfası
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>");
  } else {
    // 404 Sayfası
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end(); // Yanıt tamamlanıyor
});

const port = 5000; // Port numarası

server.listen(port, () => {
  console.log(`Sunucu port ${port} üzerinde çalışıyor...`);
});
