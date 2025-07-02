-- Database: postgres

-- Exercice

CREATE TABLE cars_set_default (car_id PRIMARY KEY,
car_name VARCHAR(100),
car_color INTEGER DEFAULT 3 REFERENCES colors (color_id) ON DELETE SET DEFAULT;

DELETE * FROM colors

SELECT * FROM cars_set_default


