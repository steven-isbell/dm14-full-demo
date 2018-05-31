INSERT INTO users (name, authid)
VALUES ($1,$2) RETURNING *;
