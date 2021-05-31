var express = require("express");
var router = express.Router();
var TestController = require("./../controllers/test_controller");
var auth = require("./../services/auth_service");

// router.post("/fuel_update", auth, PlantUpdate.insert);
router.get("/get_test_route", auth, TestController.get);

module.exports = router;
