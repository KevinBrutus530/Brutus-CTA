const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const axios = require("axios")

const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => console.log("Server running on port ", port));
