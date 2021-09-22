/*Imports*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.options("*", cors());

/*Middleware*/
app.use(morgan("tiny"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

//importing routers
const adminRouter = require("./routers/admin");
const permisionRouter = require("./routers/permisions");
const applicantRouter = require("./routers/applicant");
const roomRouter = require("./routers/room");
const studentRouter = require("./routers/student");

//using routers
app.use("/admin", adminRouter);
app.use("/permission", permisionRouter);
app.use("/applicant", applicantRouter);
app.use("/room", roomRouter);
app.use("/student", studentRouter);

/*Env Variables*/
require("dotenv/config");
const CONNECTION_STRING = process.env.CONNECTION_STRING;

/*MongoConnection*/
mongoose
  .connect(CONNECTION_STRING, {
    dbName: "gcu_hostel",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log("DB gone Mad ", err);
  });

//Server Starting
app.listen(5000, "192.168.1.101", () => {
  console.log("Server is running at http://localhost:5000");
});
