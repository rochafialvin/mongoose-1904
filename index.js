require("dotenv").config();
require("./config/database/index");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const userRouter = require("./routers/users");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server mongoose is running");
});

app.use("/users", userRouter);

app.use((error, req, res, next) => {
  if (error.code == 11000) {
    const [field] = Object.keys(error.keyValue);
    const value = error.keyValue[field];
    error.message = `Duplicate data on ${field} : ${value}`;
  }

  res.status(500).send({
    status: "ERROR",
    message: error.message,
    data: error,
  });
});

app.listen(port, (err) => {
  if (err) return console.log({ status: "ERROR", message: err.message });

  console.log(`API is running at ${port}`);
});
