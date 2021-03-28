const tweets = require("express").Router()

const { getAllTweets, getTweetsByUser, createTweet, getSingleTweet } = require("../queries/tweetsQueries");

tweets.get("/", getAllTweets);

tweets.get("/:username", getTweetsByUser);

tweets.get("/tweet/:id", getSingleTweet)

tweets.post("/", createTweet);

module.exports = tweets;