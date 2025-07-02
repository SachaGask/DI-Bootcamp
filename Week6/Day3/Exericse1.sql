-- Database: dvdrental

SELECT * FROM language

SELECT 
    film.title,
    film.description,
    language.name AS language_name
FROM 
    film
INNER JOIN 
    language ON film.language_id = language.language_id;

SELECT 
    film.title,
    film.description,
    language.name AS language_name
FROM 
    language
LEFT JOIN 
    film ON film.language_id = language.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);


INSERT INTO new_film (name) VALUES 
('Looped'),
('Digital Shadows'),
('Hidden Stars');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255),
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- Exemple avec film_id = 1 et language_id = 1 (anglais par exemple)
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Awesome Movie', 9, 'Really loved the storytelling and visuals.'),
(2, 2, 'Un film incroyable', 8, 'Très bon jeu d’acteur et scénario captivant.');

DELETE FROM new_film WHERE id = 1;

UPDATE film
SET language_id = 2 -- par exemple, "Italian"
WHERE film_id IN (1, 2, 3); -- remplace par les IDs réels que tu veux mettre à jour

-- customer table constraints (simplifié) :
FOREIGN KEY (store_id) REFERENCES store(store_id),
FOREIGN KEY (address_id) REFERENCES address(address_id)

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
  AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

SELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;

