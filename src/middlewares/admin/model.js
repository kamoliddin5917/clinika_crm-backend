const { fetch } = require("../../lib/pg");

const ADMIN = `SELECT admin_id FROM admins WHERE admin_id = $1`;

const admin = (...values) => fetch(ADMIN, values);

module.exports = { admin };
