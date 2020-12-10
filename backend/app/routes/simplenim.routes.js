module.exports = app => {
    const simplenims = require("../controllers/simplenim.controller.js");

    var router = require("express").Router();

    // Create a new simplenim
    router.post("/", simplenims.create);

    // Retrieve all simplenims
    router.get("/", simplenims.findAll);

    // Retrieve all aktif simplenims
    router.get("/aktif", simplenims.findAllAktif);

    // Retrieve a single simplenim with nim
    router.get("/:nim", simplenims.findOne);

    // Update a simplenim with nim
    router.put("/", simplenims.update);

    // Delete a simplenim with nim
    router.delete("/:nim", simplenims.delete);

    // Create a new simplenim
    //    router.delete("/", simplenims.deleteAll);

    app.use('/api/simplenims', router);
};