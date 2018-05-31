CREATE TABLE product
(
    id SERIAL PRIMARY KEY, 
    type VARCHAR(55),
    price MONEY
);

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(55),
    authid VARCHAR(55)
)
