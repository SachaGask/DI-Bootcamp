CREATE TABLE producers (
    movie_id INTEGER PRIMARY KEY,
    producer_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

INSERT INTO producers (movie_id, producer_name) VALUES
(1, 'Steven Spielberg'),
(2, 'Christopher Nolan');
