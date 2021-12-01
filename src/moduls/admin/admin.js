const model = require("./model");
const { verify } = require("../../lib/jwt");

module.exports = {
  GET_CLIENTS: async (req, res) => {
    try {
      const { token } = req.headers;
      const { adminId } = verify(token);
      if (!adminId) return res.status(400).json({ message: "Bad request!" });
      const { userId } = req.params;
      if (userId) {
        const clientOcheredArchived = await model.clientOcheredArchived(userId);

        return res.status(200).json({ message: "ok", clientOcheredArchived });
      }
      const clientOcheredNow = await model.clientOcheredNow(adminId);
      const clients = await model.clients(adminId);

      res.status(200).json({ message: "ok", clients, clientOcheredNow });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { clientId } = req.params;
      if (!clientId) return res.status(400).json({ message: "Bad request!" });

      const clientDelete = await model.clientDelete(clientId);
      if (!clientDelete)
        return res.status(400).json({ message: "Bad request!" });

      res.status(200).json({ message: "Deleted!", clientDelete });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
