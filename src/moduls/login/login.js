const bcrypt = require("bcrypt");
const { sign } = require("../../lib/jwt");
const model = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { password, phone } = req.body;
      if (!password || !phone)
        return res.status(400).json({ message: "Bad request!" });

      const findAdmin = await model.findAdmin(phone, password);
      const findClient = await model.findClient(phone);

      if (findAdmin) {
        return res.status(200).json({
          message: "ok",
          token: sign({ adminId: findAdmin.admin_id }),
          type: "admin",
        });
      } else if (findClient) {
        const match = await bcrypt.compare(
          password,
          findClient.client_password
        );
        if (match) {
          return res.status(200).json({
            message: "ok",
            token: sign({ clientId: findClient.client_id }),
            type: "client",
          });
        } else {
          return res.status(400).json({ message: "Bad request!" });
        }
      } else {
        return res.status(400).json({ message: "Bad request!" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
