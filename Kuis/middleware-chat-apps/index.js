require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT;

app.use(express.json());
app.use(express.urlencoded());

const db_mysql = require("./models");
db_mysql.sequelize.sync();

const userRoute = require("./src/routes/UserRoute");
const messengerRoute = require("./src/routes/MessengerRoute");
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/msg", messengerRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on http://localhost:${port}`);
});
