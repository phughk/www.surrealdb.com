// a simple user struct
type testUser struct {
	surrealdb.Basemodel `table:"test"`
	Username            string `json:"username,omitempty"`
	Password            string `json:"password,omitempty"`
	ID                  string `json:"id,omitempty"`
}

// select a user
data, err := db.Select("person:electwix")

var user testUser
err = surrealdb.Unmarshal(userData, &user)

