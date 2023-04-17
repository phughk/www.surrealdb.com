// Update all records in a table
db.Change("person", map[string]interface{}{
	"updated_at": time.Now(),
});
// Update a record with a specific ID
db.Change("person:tobie", map[string]interface{}{
	"updated_at": time.Now(),
	"settings": map[string]bool{
		"active": true,
	},
});
