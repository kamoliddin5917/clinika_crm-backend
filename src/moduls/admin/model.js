const { fetch, fetchAll } = require("../../lib/pg");

const CLIENT = `
SELECT cl.client_id, cl.client_name, cl.client_phone
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
INNER JOIN directions d
ON c.clinika_id = d.direction_clinika
INNER JOIN archived_turns at
ON d.direction_id = at.direction_id
INNER JOIN clients cl
ON at.client_id = cl.client_id
WHERE a.admin_id = $1
`;
const CLIENT_OCHERED_ARCHIVED = `
SELECT at.archived_turn_id, d.direction_name
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
LEFT JOIN directions d 
ON c.clinika_id = d.direction_clinika
LEFT JOIN archived_turns at
ON at.direction_id = d.direction_id
WHERE at.client_id = $1
`;

const CLIENT_OCHERED_NOW = `
SELECT cl.client_id, cl.client_name, cl.client_phone, t.turn_id,  d.direction_name
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
INNER JOIN directions d
ON c.clinika_id = d.direction_clinika
INNER JOIN turns t
ON d.direction_id = t.direction_id
INNER JOIN clients cl
ON t.client_id = cl.client_id
WHERE a.admin_id = $1
`;

const DELETE_TURN = `DELETE FROM turns WHERE turn_id = $1 RETURNING *`;

const clients = (...values) => fetchAll(CLIENT, values);
const clientOcheredArchived = (...values) =>
  fetchAll(CLIENT_OCHERED_ARCHIVED, values);
const clientOcheredNow = (...values) => fetchAll(CLIENT_OCHERED_NOW, values);
const clientDelete = (...values) => fetch(DELETE_TURN, values);

module.exports = {
  clients,
  clientOcheredArchived,
  clientOcheredNow,
  clientDelete,
};
