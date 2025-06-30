-- Database: dvdrental

--SELECT * FROM customer

-- SELECT first_name || ' ' || last_name AS full_name
-- FROM public.customer;

-- SELECT DISTINCT create_date
-- FROM public.customer;

-- SELECT *
-- FROM public.customer
-- ORDER BY first_name DESC;

-- SELECT film_id, title, description, release_year, rental_rate
-- FROM public.film
-- ORDER BY rental_rate ASC;

-- SELECT address, phone
-- FROM public.address
-- WHERE district = 'Texas';

-- SELECT *
-- FROM public.film
-- WHERE film_id IN (15, 150);

-- SELECT film_id, title, description, length, rental_rate
-- FROM public.film
-- WHERE title = 'Inception';

-- SELECT film_id, title, description, length, rental_rate
-- FROM public.film
-- WHERE title ILIKE 'In%';

-- SELECT film_id, title, rental_rate
-- FROM public.film
-- ORDER BY rental_rate ASC
-- OFFSET 10 ROWS
-- FETCH NEXT 10 ROWS ONLY;

-- SELECT 
--    c.first_name,
--    c.last_name,
--    p.amount,
--    p.payment_date
-- FROM public.customer c
-- JOIN public.payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id ASC;

-- SELECT f.film_id, f.title
-- FROM public.film f
-- LEFT JOIN public.inventory i ON f.film_id = i.film_id
-- WHERE i.inventory_id IS NULL;

-- SELECT ci.city, co.country
-- FROM public.city ci
-- JOIN public.country co ON ci.country_id = co.country_id;

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    p.staff_id
FROM public.customer c
JOIN public.payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC;

