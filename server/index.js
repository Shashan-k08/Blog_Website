const express = require("express");
const connectToMongo = require("./db");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
var cors = require("cors");
connectToMongo();
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));
app.listen(5000);
