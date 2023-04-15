"use strict";

const express = require("express");

const app = express();
app.disable("x-powered-by");

app.get("/", (request, response) => {
  response.json({ status: "online" });
});

module.exports = app;
