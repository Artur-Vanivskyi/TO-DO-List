const express = require("express");
const app = express();
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const todoRouter = require("./todos/todos.router");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);


app.use(notFound);

app.use(errorHandler);

module.exports = app;