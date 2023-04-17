// Update all records in a table
db.Update("person");
// Update a record with a specific ID
db.Update("person:ElecTwix", map[string]interface{}{
	"name": "ElecTwix",
	"settings": map[string]bool{
		"active": true,
		"marketing": true,
	},
});
