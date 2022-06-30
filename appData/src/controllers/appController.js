const errorMsg = require("../helpers/errorMessage").errorMessages;
const utils = require("../helpers/utils");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { joiSchema } = require("../helpers/joi_validation");

/**
 * @description userProfile controller get data of users profile.
 * @function userProfile
 */
exports.userProfile = async (req, res) => {
  try {
    return res.status(200).send(utils.responseMsg({message: "hello world!"}));
  } catch (err) {
    console.log("ERROR", err.stack);
    return res.status(500).send(utils.responseMsg(true, false, err));
  }
};
