INSERT INTO cliniks (clinika_name) VALUES ('Kamoliddin-Shifo');
INSERT INTO cliniks (clinika_name) VALUES ('Shifo-Nur');
INSERT INTO cliniks (clinika_name) VALUES ('Sog''lom-Ko''z');
INSERT INTO cliniks (clinika_name) VALUES ('Akfa-Medline');
INSERT INTO cliniks (clinika_name) VALUES ('TOSHMI');
INSERT INTO cliniks (clinika_name) VALUES ('M-Shfo');
INSERT INTO cliniks (clinika_name) VALUES ('Asia-Med');


INSERT INTO directions (direction_name, direction_clinika) VALUES 
('Qon topshirish', 'eb53ad85-425a-4e36-8bfd-17ef1b96331a'),
('Ko''z', 'eb53ad85-425a-4e36-8bfd-17ef1b96331a'),
('Lo''r', 'eb53ad85-425a-4e36-8bfd-17ef1b96331a'),
('Aperatsiya', 'eb53ad85-425a-4e36-8bfd-17ef1b96331a');

INSERT INTO directions (direction_name, direction_clinika) VALUES 
('UZI', 'e3b8d475-7ccf-4041-81be-261de5229805'),
('Flugrafiya', 'e3b8d475-7ccf-4041-81be-261de5229805'),
('Rentgen', 'e3b8d475-7ccf-4041-81be-261de5229805');

INSERT INTO directions (direction_name, direction_clinika) VALUES 
('Jadval', '727ec934-11fb-4181-a95b-b79235670aed'),
('Ko''z', '727ec934-11fb-4181-a95b-b79235670aed'),
('Nur', '727ec934-11fb-4181-a95b-b79235670aed'),
('Aperatsiya', '727ec934-11fb-4181-a95b-b79235670aed');

INSERT INTO admins (admin_name, admin_password, admin_phone, admin_clinika) VALUES 
('Kamoliddin', 'toxir-brat', '7777777', 'eb53ad85-425a-4e36-8bfd-17ef1b96331a'),
('Umida', 'zuxra', '8888888', 'e3b8d475-7ccf-4041-81be-261de5229805'),
('Malika', 'malikam', '9999999', '727ec934-11fb-4181-a95b-b79235670aed');

INSERT INTO clients (client_name, client_password, client_phone) VALUES
('Dilshoda', 'absd', '(88) 888 88 88'),
('Durdona', 'sde', '(88) 888 88 99'),
('Sevara', 'fss', '(88) 888 88 77'),
('Sevinch', 'ert', '(88) 888 88 66'),
('Malika', 'aaa', '(88) 888 88 55');

INSERT INTO turns (direction_id, client_id) VALUES
('44d7be67-0f0d-4672-bbd7-32c3cd733fb3', '24fa075b-8e84-4e73-b319-a53d73a5a213'),
('adb538b6-0a13-4909-a606-a2c57e569b4f', 'a5ce03c8-0caa-4c5d-8458-841a70136a1d');