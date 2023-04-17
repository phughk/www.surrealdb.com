// Create a record with a random ID
person := db.Create("person", map[string]interface{});
			
// Create a record with a specific ID w/ a map
	await db.create("person:tobie", map[string]interface{}{
	"name": "Tobie",
	"settings": map[string]bool{
		"active": true,
		"marketing": true,
	},
});

// Create a record with a specific ID w/ a struct
type Person struct {
	Name string
	Settings struct {
		Active bool
		Marketing bool
	}
}

await db.create("person:tobie", Person{
	Name: "Tobie",
	Settings: struct {
		Active    bool
		Marketing bool
	}{
		Active:    true,
		Marketing: true,
	},
});
