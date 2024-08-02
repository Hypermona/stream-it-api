const express = require("express");
const { getShows, bulkAddShows, getShowById } = require("../controller/show.controller");

const showRoute = express.Router();

showRoute.get("/", getShows);
showRoute.post("/", bulkAddShows);
showRoute.get("/:id", getShowById);

module.exports = showRoute;
