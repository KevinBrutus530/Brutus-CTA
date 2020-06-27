const db = require("../db/index.js")

const createUser = async (req, res, next) => {
    try {
        let {first_name, last_name, display_name, profile_pic} = req.body
        let newUser = await db.one("INSERT INTO users(first_name, last_name, display_name, profile_pic) VALUES ($1, $2, $3, $4) RETURNING *", [first_name, last_name, display_name, profile_pic])
        res.status(200).json({
            status: "Success",
            message: "New User Created",
            body: {
                newUser
            }
        })
    } catch (error) {
        res.json({
        status: "Error",
        message: "User already exists"
    })
    next(error)
    }
}

const getSingleUserById = async (req,res,next) => {
    console.log(req)
    let { id } = req.params
    let singleUser = await db.one("SELECT * FROM users where id = $1", [id])
    try{
        res.status(200).json({
            status: "Success",
            message: "Got a single user",
            body: {
                singleUser
            }
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "No user found"
        })
        next(error)
    }
}

module.exports = {
    createUser,
    getSingleUserById
};