// Create a record with a random ID
db.Create("person", map[string]interface{}{})

// Create a record with a specific ID w/ a map
db.Create("person:tobie", map[string]interface{}{
	"name": "Tobie",
	"settings": map[string]bool{
		"active":    true,
		"marketing": true,
	},
})

// Create a record with a specific ID w/ a struct
type Person struct {
	Name     string
	Surname  string
	Settings settings
}

type settings struct {
	Active    bool
	Marketing bool
}

data := Person{
	Name: "Hugh",
	Settings: settings{
		Active:    true,
		Marketing: true,
	},
}

db.Create("person:hugh", data)