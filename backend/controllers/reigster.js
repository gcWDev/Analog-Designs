const { createAccount } = require("../models/user");
const { hashPassword } = require("../services/passwordUtils");

// const users = [];

async function createAccountController(req, res) {
  try {
    const { email, pass, firstName, lastName, phone, avatar } = req.body;
    console.log(avatar);
    const hashedPass = await hashPassword(pass);
    const userInput = [
      email,
      `${firstName} ${lastName}`,
      phone,
      hashedPass,
      `${firstName}.${lastName}`,
      avatar,
    ];

    const results = await createAccount(userInput);

    console.log(results);

    if (!results.success) {
      return res
        .status(500)
        .json({ status: "failed", msg: results.error.message });
    }

    return res.status(200).json({ status: "Registered" });
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
