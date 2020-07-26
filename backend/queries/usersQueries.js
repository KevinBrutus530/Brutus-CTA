const db = require("../db/index.js")

const createUser = async (req, res, next) => {
    try {
        await db.none("INSERT INTO users(id, email) VALUES (${id}, ${email})", 
            req.body
            );
        res.json({
            message: "New User Created"
        })
    } catch (error) {
        next(error)
    }
    // next(error)
}


// const getSingleUserById = async (req,res,next) => {
//     console.log(req)
//     let { id } = req.params
//     let singleUser = await db.one("SELECT * FROM users where id = $1", [id])
//     try{
//         res.status(200).json({
//             status: "Success",
//             message: "Got a single user",
//             body: {
//                 singleUser
//             }
//         })
//     } catch(error) {
//         res.json({
//             status: "Error",
//             message: "No user found"
//         })
//         next(error)
//     }
// }

const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await db.any("SELECT * FROM users");
        res.json({
            users,
            message: "All users"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    fetchAllUsers
    // getSingleUserById
};