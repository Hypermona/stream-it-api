const express = require("express");
const { searchShows } = require("../controller/search.controller");

const searchRoute = express.Router();

searchRoute.get("/shows", searchShows);

module.exports = searchRoute;
