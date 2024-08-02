const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ShowRoute = require("./routes/show.route");
const searchRoute = require("./routes/search.route");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/shows", ShowRoute);
app.use("/search", searchRoute);

mongoose.connect("mongodb://127.0.0.1:27017/streamit").then(
  () => {
    console.log("Connected!");
    app.listen(8000, () => {
      console.log("Express Connection successful");
    });
  },
  (err) => console.log(err)
);
