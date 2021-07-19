import express from "express";
import path from "path"
import "./parser"

const app = express();
const port = 3000;

const IMAGE_FEED_URL = "https://janschill.net/public/solid-image-feed-example/"

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
