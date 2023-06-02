-- Use an expression as an alias
SELECT age >= 18 AS adult FROM user;

-- Select nested array values only
SELECT *, tags.*.value AS tags FROM article;

-- Select filtered nested array values
SELECT addresses[WHERE active = true] FROM customer;

-- Select a remote field from connected out graph edges
SELECT ->like->friend.name AS friends FROM person:tobie;

-- Select a person who has reacted to a post using a celebration
SELECT * FROM person WHERE ->(reaction WHERE type='celebrate')->post;

-- Use mathematical calculations in a select expression
SELECT ( ( celsius * 2 ) + 30 ) AS fahrenheit FROM temperatue;

-- Select manually generated object structure
SELECT { weekly: false, monthly: true } AS `marketing settings` FROM user;

-- Use the result of a subquery as a returned field
SELECT *, (SELECT * FROM events WHERE type = 'activity' LIMIT 5) AS history FROM user;

-- Use the parent instance's field in a subquery
SELECT *, (SELECT * FROM events WHERE host == $parent.id) AS self_hosted FROM user;
