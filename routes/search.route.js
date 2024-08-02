const express = require("express");
const { searchShows } = require("../controllers/search.controller");

const searchRoute = express.Router();

searchRoute.get("/shows", searchShows);

module.exports = searchRoute;
