const model = require("./model");

module.exports = {
  GET: async (_, res) => {
    try {
      const cliniks = await model.cliniks();
      const directions = await model.directions();

      res.status(200).json({ message: "ok", cliniks, directions });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
