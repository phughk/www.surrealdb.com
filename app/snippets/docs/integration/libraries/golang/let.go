// Assign the variable on the connection
db.Let("name", map[string]string{
		"first": "ElecTwix",
		"last": "Morgan Hitchcock",
});
// Use the variable in a subsequent query
db.Query("CREATE person SET name = $name", nil);
// Use the variable in a subsequent query
db.Query("SELECT * FROM person WHERE name.first = $name.first", nil);
