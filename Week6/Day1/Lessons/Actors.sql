-- Database: public

-- Créer la table

CREATE TABLE actors (
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	date_of_birth DATE NULL,
	number_oscars INT NULL
);

-- Insérer Valeurs

INSERT INTO actors (first_name, last_name, date_of_birth, number_oscars) VALUES
('Matt','Damon', '06/05/1980', 2),
('George','Clooney', '06/05/1965', 1),
('Gal','Gadot', '06/05/1970', 5);

-- Compter Nombre Acteurs

SELECT COUNT(*) FROM actors;

-- Réponse: Les colonnes définies comme NOT NULL donneront une erreur, sinon c'est ok