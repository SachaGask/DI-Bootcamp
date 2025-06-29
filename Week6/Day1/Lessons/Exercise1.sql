-- Database: public

-- Table Items

CREATE TABLE items (
	product_id SERIAL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	price INT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- Table Customers

CREATE TABLE customers(
	first_name VARCHAR(15) NOT NULL,
	last_name VARCHAR(15) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- Requetes

SELECT * FROM items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name <> 'Scott';

