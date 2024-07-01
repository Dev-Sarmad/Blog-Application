import { db } from "../db.js";
export const getPosts = (req, res) => {
  // If the query string includes a category parameter,
  // select all posts from the given category. Otherwise,
  // select all posts.
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  // Use the database object to query the database with the
  // appropriate SQL statement and any necessary parameters.
  db.query(q, [req.query.cat], (err, data) => {
    // If there's an error, send a 500 status code and the error message
    if (err) return res.status(500).send(err);

    // Otherwise, send a 200 status code and the data as JSON
    return res.status(200).json(data);
  });
};
export const addPost = (req, res) => {
  res.json("Post from controllers");
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title` , p.img, u.img AS userImg, `description`, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id =?";
  db.query(q, [req.params.id], (error, data) => {
    if (error) return res.json(error);
    return res.status(200).json(data[0]);
  });
};
export const deletePost = (req, res) => {
  res.json("Post from controllers");
};
export const updatePost = (req, res) => {
  res.json("Post from controllers");
};
