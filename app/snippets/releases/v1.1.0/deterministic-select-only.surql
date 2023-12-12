-- Fails, not limited to 1 result and result can contain multiple outputs.
SELECT * FROM ONLY table_name;

-- Works! Resource gets returned, or NONE if no resource was found.
SELECT * FROM ONLY table_name LIMIT 1;
