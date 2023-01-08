require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/incomemodel/userSchema");
const cors = require("cors");
const userRoutes = require("./routes/userroutes/users");
const authRoutes = require("./routes/userroutes/auth");
const incomeroutes = require("./routes/incomeroutes/income");
const expenseroutes = require("./routes/incomeroutes/expense");

const port = process.env.PORT || 8003;

app.get("/", (req, res) => {
  res.json("server start");
});

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(userRoutes);
app.use(authRoutes);
app.use(incomeroutes);
app.use(expenseroutes);

app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});
