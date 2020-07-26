const users = require('express').Router();

const {
  createUser,
  fetchAllUsers
} = require("../queries/usersQueries")

users.post("/", createUser)
users.get("/", fetchAllUsers)

module.exports = users;