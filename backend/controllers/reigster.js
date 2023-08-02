const createAccount = require("../services/userService");
const { hashPassword } = require("../services/passwordUtils");

// const users = [];

async function createAccountController(req, res) {
  try {
    const { email, pass, firstName, lastName, phone } = req.body;
    const hashedPass = await hashPassword(pass);
    const userInput = [email, hashedPass, `${firstName} ${lastName}`, phone];

    createAccount(userInput, (error, results) => {
      if (error) {
        return res.status(200).json({
          status: "request ok, registration denied",
          msg: error.sqlMessage,
        });
      }
      return res
        .status(200)
        .json({ status: "success", msg: `${email} registered succesfully` });
    });
    // users.push({
    //   email: email,
    //   password: hashedPass,
    // });
    // return res.status(200).json({ status: "success", data: users });
    // Leave for testing
  } catch (err) {
    return res.status(500).json({ status: "error", msg: err.message });
  }
}

module.exports = { createAccountController };
