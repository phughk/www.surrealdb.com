const db = new Surreal('ws://localhost:8000/rpc', {
	ns: 'test',
	db: 'test',
});

db.signup({
	NS: 'test',
	DB: 'test',

	// Provide the name of the scope
	SC: 'user',

	// Provide the variables used by the signup query
	name: 'John Doe',
	email: 'john@doe.org',
	password: 'VerySecurePassword!',
});
