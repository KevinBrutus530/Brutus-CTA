const db = require("../db/index")

const getAllTweets = async (req, res, next) => {
    try{
        let tweets = await db.any("SELECT * FROM tweets ORDER BY id DESC") 
        res.status(200).json({
            status: "Success",
            message: "got all tweets",
            body: tweets,
         })

    }catch(error){
        console.log(error)
        
    }
}
const getTweetByUser = async (req,res, next) => {
    try{
        let tweets = await db.any("SELECT *  FROM tweets WHERE user_post_id = $1", req.params.id)
        res.status(200).json({
            status: "Success",
            message: "got tweets by user",
            body: tweets,

         })
    }catch(error){
        res.status(401).json({
            status: "fail",
            message: "did not get tweets by user"
        })
    }
}

const createTweet = async (req,res, next) => {

    console.log(req)
    let {user_post_id,caption} = req.body
    try{
        let newTweet = await db.one("INSERT INTO tweets  (user_tweet_id, tweet) VALUES (${user_tweet_id}, ${tweet}) RETURNING *", req.body)
        res.status(200).json({
            status: "Success",
            message: "Create Tweet",
            body: newTweet

         })
    }catch(error){
        res.status(401).json({
            status: "fail",
            message: "did not create tweet"
        })
    }
}

const getSingleTweet = async (req,res,next) => {
    try{
        let { id } = req.params
        let singleTweet = await db.any("SELECT * FROM tweets WHERE id =$1", [id])
        res.status(200).json({
            status: "Success",
            message: "Got tweet by id: " + id,
            body: {
                singleTweet
            }
        })
    } catch(error) {
        res.status(401).json({
            status: "fail",
            message: "Unable to get tweet"
        })
    }
}

module.exports = { getAllTweets, getTweetByUser, createTweet, getSingleTweet}