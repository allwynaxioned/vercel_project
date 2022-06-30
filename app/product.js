const express = require("express");
const router = express.Router();

router.get("/",(req, res)=> {
    try {
        return res.send({status: 200, message: "get data successfull"});
    } catch (error) {
        return res.status(500).send({error});
    }
});

router.get("/api/data",(req, res)=> {
    try {
        return res.send({status: 200, message: "checking api"});
    } catch (error) {
        return res.status(500).send({error});
    }
});

module.exports = router;