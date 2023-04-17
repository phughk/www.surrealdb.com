// a simple user struct
type testUser struct {
	surrealdb.Basemodel `table:"test"`
	Username            string `json:"username,omitempty"`
	Password            string `json:"password,omitempty"`
	ID                  string `json:"id,omitempty"`
}

// create a new user
user := testUser{
	Username: "electwix",
	Password: "1234",
	ID:       "sometable:someid",
}

// create a new user
data, err := surrealdb.SmartMarshal(db.Create, user)
// select a user
data, err := surrealdb.SmartMarshal(db.Select, user)
// update a user
data, err := surrealdb.SmartMarshal(db.Update, user)
// delete a user
data, err := surrealdb.SmartMarshal(db.Delete, user)

