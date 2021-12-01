const model = require("./model");
const { verify } = require("../../lib/jwt");

module.exports = {
  GET: async (req, res) => {
    try {
      const { token } = req.headers;
      const { clientId } = verify(token);
      if (!clientId) return res.status(400).json({ message: "Bad request!" });

      const ocheredTable = await model.ocheredTable();

      if (!ocheredTable.length)
        return res.status(400).json({ message: "Bad request!" });

      res.status(201).json({
        message: "Ochered count",
        ocheredTable,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  POST: async (req, res) => {
    try {
      const { directionId } = req.body;

      const { token } = req.headers;
      const { clientId } = verify(token);
      if (!clientId || !directionId)
        return res.status(400).json({ message: "Bad request!" });

      const newOchered = await model.ochered(directionId, clientId);
      const countOchered = await model.countOchered();

      if (!newOchered || !countOchered)
        return res.status(400).json({ message: "Bad request!" });

      res.status(201).json({
        message: "Ochered created",
        ochered: countOchered.count,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
