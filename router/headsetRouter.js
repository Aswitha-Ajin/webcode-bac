const express = require("express");
const router = express.Router();
const headsetModule = require("../modules/headsetModule");

router.get("/get",headsetModule.getHeadset);

router.put("/update/:id",headsetModule.updateHeadset);

router.post("/create",headsetModule.createHeadset);

router.delete("/delete/:id",headsetModule.deleteHeadset);

module.exports = router;

