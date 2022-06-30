const router = require("express").Router();
const { appClient } = require("./routesDependencies").default;

router.get("/users", appClient.userProfile);

module.exports = router;
