var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const headers = require("./middleware/headers");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cardsRouter = require("./routes/cards");
var servicesRouter = require("./routes/services");

const auth = require("./middleware/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(headers);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cards", auth, cardsRouter);
app.use("/services", servicesRouter);

module.exports = app;
