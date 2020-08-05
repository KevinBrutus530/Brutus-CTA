const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usersRouter = require('./routes/users');
const tweetsRouter = require('./routes/tweets');

app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter);

app.listen(PORT, () => console.log("Server running on port ", PORT));
