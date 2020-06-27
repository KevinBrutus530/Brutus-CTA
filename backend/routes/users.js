const users = require('express').Router();

const {
  createUser,
  getSingleUserById
} = require("../queries/usersQueries")

users.get("/:id", getSingleUserById)
users.post("/", createUser)

module.exports = users;