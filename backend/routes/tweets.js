const tweets = require("express").Router()

const { getAllTweets, getTweetByUser, createTweet, getSingleTweet } = require("../queries/tweetsQueries");

tweets.get("/", getAllTweets);

tweets.get("/:id", getTweetByUser);

tweets.get("/post/:id", getSingleTweet)

tweets.post("/", createTweet);

module.exports = tweets;