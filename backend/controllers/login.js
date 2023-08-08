async function loginController(req, res) {
  try {
    if (req.user) {
      return res.status(200).json({ status: "success" });
    }
    return res
      .status(400)
      .json({ status: "failed", msg: `User does not exist` });
  } catch (err) {
    return res.status(500).json({ status: "error", msg: err.message });
  }
}

module.exports = { loginController };
