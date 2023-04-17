// Update all records in a table
db.Modify('person', map[string]interface{}{"op": "replace", "path": "/created_at", "value": time.Now()});
// Update a record with a specific ID
db.Modify('person:tobie', map[string]interface{}{
	{ "op": "replace", "path": "/settings/active", "value": false },
	{ "op": "add", "path": "/tags", "value": []string{"developer", "engineer"} },
	{ "op": "remove", "path": "/temp" },
});
