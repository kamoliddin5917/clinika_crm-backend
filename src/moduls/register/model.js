const { fetch } = require("../../lib/pg");

const REGISTER = `
INSERT INTO clients (client_name, client_password, client_phone) VALUES ($1, $2, $3)
RETURNING client_id, client_name, client_phone`;

const register = (...values) => fetch(REGISTER, values);

module.exports = {
  register,
};
