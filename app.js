require("dotenv").config();
const express = require("express");
const Connection = require("./connection");

const conn = new Connection();

const app = express();

app.listen(4000, async () => {
  await conn.connect();
  console.log("Server running on port 4000");
});
