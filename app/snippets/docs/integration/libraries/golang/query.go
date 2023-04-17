// Assign the variable on the connection
result, err := db.Query("CREATE person; SELECT * FROM type::table($tb);", map[string]string{
	"tb": "person"
});
