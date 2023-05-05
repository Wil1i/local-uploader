const express = require("express");
const Router = express.Router();
const uploader = require("../helpers/uploader");

const indexController = require("../controllers/indexController");
Router.get("/", indexController.get);
Router.post("/", uploader.single("file"), indexController.post);

const deleteController = require("../controllers/deleteController");
Router.get("/del", deleteController.get);

const renameController = require("../controllers/renameController")
Router.post('/rename', renameController.post)

module.exports = Router;
