// a simple user struct
type testUser struct {
	Username            string `json:"username,omitempty"`
	Password            string `json:"password,omitempty"`
	ID                  string `json:"id,omitempty"`
}

username := "johnny"
password := "123"

// create test user with raw SurrealQL and unmarshal
userData, err := s.db.Query("create users:johnny set Username = $user, Password = $pass", map[string]interface{}{
	"user": username,
	"pass": password,
})

var userSlice []testUser
ok, err := surrealdb.UnmarshalRaw(userData, &userSlice)


