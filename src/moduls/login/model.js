const { fetch } = require("../../lib/pg");

const FIND_CLIENT = `SELECT client_id, client_password FROM clients WHERE client_phone = $1`;
const FIND_ADMIN = `SELECT admin_id, admin_password FROM admins WHERE admin_phone = $1 AND admin_password = $2`;

const findClient = (...values) => fetch(FIND_CLIENT, values);
const findAdmin = (...values) => fetch(FIND_ADMIN, values);

module.exports = { findClient, findAdmin };
