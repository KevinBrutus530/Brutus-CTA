const users = require("express").Router();

const {
  createUser,
  fetchAllUsers,
  getSingleUserById,
} = require("../queries/usersQueries");

users.post("/", createUser);
users.get("/", fetchAllUsers);
users.get("/:id", getSingleUserById);

module.exports = users;
