SELECT * FROM cliniks;
SELECT * FROM admins;
SELECT * FROM directions;
SELECT * FROM clients;
SELECT * FROM turns;
SELECT * FROM archived_turns;

DELETE FROM turns WHERE turn_id = '76810a6e-7a96-488c-93a6-97a3245fb03f';

SELECT a.archived_turn_id, c.client_name, d.direction_name 
FROM clients c INNER JOIN archived_turns a 
ON c.client_id = a.client_id
LEFT JOIN directions d
ON a.direction_id = d.direction_id 
WHERE c.client_id = '24fa075b-8e84-4e73-b319-a53d73a5a213';

SELECT cl.client_id, cl.client_name, cl.client_phone
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
INNER JOIN directions d
ON c.clinika_id = d.direction_clinika
INNER JOIN archived_turns at
ON d.direction_id = at.direction_id
INNER JOIN clients cl
ON at.client_id = cl.client_id
WHERE a.admin_id = '086138f0-513a-4569-9ad9-c3c7b1124816';


SELECT cl.client_id, cl.client_name, cl.client_phone, t.turn_id, d.direction_name
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
INNER JOIN directions d
ON c.clinika_id = d.direction_clinika
INNER JOIN turns t
ON d.direction_id = t.direction_id
INNER JOIN clients cl
ON t.client_id = cl.client_id
WHERE a.admin_id = '086138f0-513a-4569-9ad9-c3c7b1124816';


SELECT at.archived_turn_id, d.direction_name 
FROM admins a INNER JOIN cliniks c
ON a.admin_clinika = c.clinika_id 
LEFT JOIN directions d 
ON c.clinika_id = d.direction_clinika
LEFT JOIN archived_turns at
ON at.direction_id = d.direction_id
WHERE at.client_id = '24fa075b-8e84-4e73-b319-a53d73a5a213';
