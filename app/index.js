const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("DevOps PoC running!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
