const db = new Surreal('ws://localhost:8000/rpc', {
	ns: 'test',
	db: 'test',
});

db.signin({
	// Because we are signin in a database user, we need to let SurrealDB know on which database this user is located.
	NS: 'test',
	DB: 'test',

	user: 'mary',
	pass: 'VerySecurePassword!',
});
