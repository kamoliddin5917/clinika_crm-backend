const { fetch } = require("../../lib/pg");

const CLIENT = `SELECT client_id FROM clients WHERE client_id = $1`;

const client = (...values) => fetch(CLIENT, values);

module.exports = { client };
