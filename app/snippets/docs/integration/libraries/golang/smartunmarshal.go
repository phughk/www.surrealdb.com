// a struct that the user would like to store in SurrealDB
type testUser struct {
	surrealdb.Basemodel `table:"test"`
	Username            string `json:"username,omitempty"`
	Password            string `json:"password,omitempty"`
	ID                  string `json:"id,omitempty"`
}

QueryStr := "Create users set Username = $user, Password = $pass"
dataArr, err := surrealdb.SmartUnmarshal[[]testUser](s.db.Query(QueryStr, map[string]interface{}{
	"user": "electwix",
	"pass": "strongpassword",
}))

// select array of users with raw query
dataArr, err := surrealdb.SmartUnmarshal[[]testUser](db.Query("Select * from $record", map[string]interface{}{
	"record": user[0].ID,
}))

// select a user
data, err := surrealdb.SmartUnmarshal[testUser](s.db.Select(user[0].ID))

data, err := surrealdb.SmartUnmarshal[[]testUser](s.db.Select("users"))


