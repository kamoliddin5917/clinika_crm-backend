const model = require("./model");
const { verify } = require("../../lib/jwt");

module.exports = {
  AUTH: async (req, res, next) => {
    try {
      const { token } = req.headers;
      const { adminId } = verify(token);
      if (!adminId) return res.status(400).json({ message: "Bad request" });

      const admin = await model.admin(adminId);
      if (admin) {
        next();
      } else {
        res.status(400).json({ message: "Bad request" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "Bad request" });
    }
  },
};
