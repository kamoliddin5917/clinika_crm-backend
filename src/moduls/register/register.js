const bcrypt = require("bcrypt");
const { sign } = require("../../lib/jwt");
const model = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { name, password, phone } = req.body;
      if (!name || !password || !phone)
        return res.status(400).json({ message: "Bad request!" });

      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);

      const newClient = await model.register(name, bcryptPassword, phone);
      console.log(newClient);
      if (!newClient.client_id)
        return res.status(400).json({ message: "Bad request!" });

      res.status(201).json({
        message: "Client created",
        token: sign({ clientId: newClient.client_id }),
        type: "client",
        newClient,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
