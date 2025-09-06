const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  console.log(req);
  if (req.url !== "/favicon.ico") {
    const log = `\n${Date.now()}:New Req Recived`;
    fs.appendFile("./log.txt", log, (err) => {
      console.log(err);
    });
  }
  res.end("Hello from server");
});
myServer.listen(8000, () => {
  console.log("Server Stared..");
});
