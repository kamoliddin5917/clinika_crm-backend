const { fetch } = require("../../lib/pg");

const NEW_OCHERED = `INSERT INTO turns (direction_id, client_id) VALUES ($1, $2) RETURNING *`;
const COUNT_OCHERED = `SELECT COUNT(turn_id) FROM turns`;
const OCHERED_TABLE = `SELECT direction_id, client_id FROM turns`;

const ochered = (...values) => fetch(NEW_OCHERED, values);
const countOchered = (...values) => fetch(COUNT_OCHERED, values);
const ocheredTable = (...values) => fetch(OCHERED_TABLE, values);

module.exports = { ochered, countOchered, ocheredTable };
