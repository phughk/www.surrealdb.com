-- Returns the execution plan with the number of fetched rows
SELECT * FROM person WHERE email='tobie@surrealdb.com' EXPLAIN FULL;