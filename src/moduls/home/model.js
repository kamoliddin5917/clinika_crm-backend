const { fetchAll } = require("../../lib/pg");

const CLINIKS = `SELECT * FROM cliniks`;
const DIRECTIONS = `SELECT * FROM directions`;

const cliniks = (...values) => fetchAll(CLINIKS, values);
const directions = (...values) => fetchAll(DIRECTIONS, values);

module.exports = { cliniks, directions };
