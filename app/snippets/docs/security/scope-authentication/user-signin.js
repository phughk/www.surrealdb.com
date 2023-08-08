const db = new Surreal('ws://localhost:8000/rpc', {
	ns: 'test',
	db: 'test',
});

db.signin({
	NS: 'test',
	DB: 'test',

	// Provide the name of the scope
	SC: 'user',

	// Provide the variables used by the signin query
	email: 'john@doe.org',
	password: 'VerySecurePassword!',
});
