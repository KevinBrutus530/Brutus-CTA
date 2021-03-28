const db = require("../db/index");

const getAllTweets = async (req, res, next) => {
  try {
    let tweets = await db.any("SELECT tweets.id, tweets.user_tweet_id, tweets.tweet, tweets.created_at, users.username FROM tweets JOIN users ON tweets.user_tweet_id = users.id ORDER BY created_at DESC");
    res.status(200).json({
      status: "Success",
      message: "got all tweets",
      body: tweets,
    });
  } catch (error) {
    console.log(error);
  }
};
const getTweetsByUser = async (req, res, next) => {
  try {
    let tweets = await db.any(
      "SELECT tweets.id, tweets.user_tweet_id, tweets.tweet, tweets.created_at, users.username FROM tweets JOIN users ON tweets.user_tweet_id = users.id WHERE users.username =$1 ORDER BY created_at DESC",
      req.params.username
    );
    res.status(200).json({
      status: "Success",
      message: "got tweets by user",
      body: tweets,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "did not get tweets by user",
    });
  }
};

const createTweet = async (req, res, next) => {
  try {
    let newTweet = await db.one(
      "INSERT INTO tweets (user_tweet_id, tweet) VALUES (${user_tweet_id}, ${tweet}) RETURNING *",
      req.body
    );
    res.status(200).json({
      status: "Success",
      message: "Create Tweet",
      body: newTweet,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "fail",
      message: "did not create tweet",
    });
  }
};

const getSingleTweet = async (req, res, next) => {
  try {
    let { id } = req.params;
    let singleTweet = await db.any("SELECT * FROM tweets WHERE id =$1", [id]);
    res.status(200).json({
      status: "Success",
      message: "Got tweet by id: " + id,
      body: {
        singleTweet,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Unable to get tweet",
    });
  }
};

module.exports = { getAllTweets, getTweetsByUser, createTweet, getSingleTweet };
