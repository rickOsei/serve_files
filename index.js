const express = require("express");
const path = require("path");

const server = express();
// const handleGetHomepage = (req, res) => {
//   const homepage = path.join(__dirname, "public", "homepage.html");
//   res.sendFile(homepage);
// };
// const handleGetHomepageCss = (req, res) => {
//   const css = path.join(__dirname, "public", "index.css");
//   res.sendFile(css);
// };

server.use(express.static(path.join(__dirname, "public")));
// server.get("/", handleGetHomepage);

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port:3000");
});
