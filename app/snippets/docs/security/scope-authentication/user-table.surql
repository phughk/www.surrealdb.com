DEFINE TABLE user SCHEMAFULL
	PERMISSIONS
		FOR select, update, delete WHERE id = $auth.id;

DEFINE FIELD name ON user TYPE string;
DEFINE FIELD email ON user TYPE string ASSERT is::email($value);
DEFINE FIELD password ON user TYPE string;

DEFINE INDEX email ON user FIELDS email UNIQUE;
