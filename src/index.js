const express = require("express");
const cors = require("cors");

require("dotenv").config();
// connecting to db
const connectToDB = require("./configs/db");
connectToDB();
// creating express app
const app = express();
// port 
const port = process.env.PORT || 5000;

// global middleware
app.use(cors());
app.use(express.json());

// importing controllers
const flatController = require("./controllers/flat.controller");

// directing request to respective controllers

app.use("/flats", flatController);

// listening to port 3007
app.listen(port, () => console.log(`listening on port ${port}`));
