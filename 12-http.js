const http = require("http");

const server = http.createServer((req, res) => {
  //   switch (req.url) {
  //     case "/":
  //       res.end(`Welcome to our home page`);
  //       break;
  //     case "/about":
  //       res.end(`Here is our short history`);
  //       break;
  //     case "/error":
  //       res.end(
  //         `<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">Get back to safety</a>`
  //       );
  //       break;
  //     default:
  //       res.writeHead(301, { Location: `http://localhost:5000/error` });
  //       res.end();
  //       break;
  //   }

  if (req.url === "/") {
    res.end(`Welcome to our home page`);
  }
  if (req.url === "/about") {
    res.end(`Here is our short history`);
  }
  if (req.url === "/error") {
    res.end(
      `<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">Get back to safety</a>`
    );
  }
});

server.listen(5000);
