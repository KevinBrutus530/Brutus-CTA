const db = require("../db/index.js");

const createUser = async (req, res, next) => {
  try {
    await db.none(
      "INSERT INTO users(id, email, username) VALUES (${id}, ${email}, ${username})",
      req.body
    );
    res.json({
      message: "New User Created",
    });
  } catch (error) {
    next(error);
  }
};

const fetchAllUsers = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json({
      users,
      message: "All users",
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUserById = async (req, res, next) => {
  let { id } = req.params;
  let singleUser = await db.one("SELECT * FROM users where id = $1", [id]);
  try {
    res.status(200).json({
      status: "Success",
      message: "Got a single user",
      body: {
        singleUser,
      },
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "No user found",
    });
    next(error);
  }
};

// const editUser = async (req, res, next) => {
//   try {
//     let { user_id, user_username } = req.body;
//     let { uid } = req.params;
//     let owner = await db.one(
//       'UPDATE owners SET owner_id=$1, owner_name=$2 WHERE user_id=$3 RETURNING *',
//       [owner_id, owner_name, uid]
//     );
//     res.status(200).json({
//       status: 'success',
//       message: 'updated owner',
//       payload: owner,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'Error',
//       message: 'Error edit Owner',
//       payload: err,
//     });
//     next();
//   }
// };

module.exports = {
  createUser,
  fetchAllUsers,
  getSingleUserById,
};
