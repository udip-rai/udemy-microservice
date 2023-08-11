const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

// View all comments
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id]) || [];
});

// Create a comment
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

// Server
app.listen(4001, () => {
  console.log("listening on 4001");
});
