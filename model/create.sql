CREATE DATABASE clinika_crm;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE cliniks(
    clinika_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    clinika_name VARCHAR(100) NOT NULL
);

CREATE TABLE directions(
    direction_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    direction_name VARCHAR(77) NOT NULL,
    direction_clinika uuid NOT NULL,
    CONSTRAINT fk_direction_clinika
        FOREIGN KEY(direction_clinika)
            REFERENCES cliniks(clinika_id)
            ON DELETE CASCADE
);

CREATE TABLE admins(
    admin_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    admin_name VARCHAR(77) NOT NULL,
    admin_password TEXT NOT NULL,
    admin_phone VARCHAR(50) NOT NULL,
    admin_clinika uuid NOT NULL,
    CONSTRAINT fk_admin_clinika
        FOREIGN KEY(admin_clinika)
            REFERENCES cliniks(clinika_id)
            ON DELETE CASCADE
);

CREATE UNIQUE INDEX adminphone ON admins(admin_phone);

CREATE TABLE clients(
    client_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    client_name VARCHAR(77) NOT NULL,
    client_password TEXT NOT NULL,
    client_phone VARCHAR(50) NOT NULL
);

CREATE UNIQUE INDEX clientphone ON clients(client_phone);

CREATE TABLE turns(
    turn_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    direction_id uuid NOT NULL,
    client_id uuid NOT NULL,
    CONSTRAINT fk_client_direction
        FOREIGN KEY(client_id)
            REFERENCES clients(client_id)
            ON DELETE CASCADE,
    CONSTRAINT fk_direction_client
        FOREIGN KEY(direction_id)
            REFERENCES directions(direction_id)
            ON DELETE CASCADE
);

CREATE TABLE archived_turns(
    archived_turn_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    turn_id uuid NOT NULL,
    direction_id uuid NOT NULL,
    client_id uuid NOT NULL
);
