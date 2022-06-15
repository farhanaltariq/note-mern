const express = require("express");
const route = express.Router();
const NoteController = require("../controllers/NoteController");

route.get("/", NoteController.getAll);
route.post("/", NoteController.create);
route.delete("/(:id)", NoteController.delete);

module.exports = route;
