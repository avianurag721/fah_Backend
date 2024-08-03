const mongoose = require("mongoose");
require("dotenv").config();


exports.connect = () => {
  console.log("mongo db url ", process.env.MONGODB_URL)
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // family:4
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log("DB CONNECTION ISSUES");
      console.error(err);
      process.exit(1);
    });
};
