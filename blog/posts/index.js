const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};

// View all posts
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Create a post
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };
  res.send(201).send(posts[id]);
});

// Server
app.listen(4000, () => {
  console.log("listening on 4000");
});
