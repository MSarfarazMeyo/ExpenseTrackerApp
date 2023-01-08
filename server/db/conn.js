const mongoose = require("mongoose");

const DB =
  "mongodb+srv://admin:admin123@cluster0.5byu2dz.mongodb.net/Expense_DB?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
