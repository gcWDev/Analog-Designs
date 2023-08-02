const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    return hashedPass;
  } catch (err) {
    return json({ status: "error", msg: err.message });
  }
}

async function verifyPassword(hashedPassword) {}

module.exports = { hashPassword, verifyPassword };
