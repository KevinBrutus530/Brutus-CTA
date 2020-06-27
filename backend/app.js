const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usersRouter = require('./routes/users');
const tweetsRouter = require('./routes/tweets');

app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter);

app.listen(port, () => console.log("Server running on port ", port));
