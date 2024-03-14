// app.js
const express = require("express");
const app = express();
let PORT = 3000;

const sendMail = require("./Controllers/sendMail");

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
