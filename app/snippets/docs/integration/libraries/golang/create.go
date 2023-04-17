TODO THIS ISNT GOLANG
// Create a record with a random ID
let person = await db.create('person');
// Create a record with a specific ID
let record = await db.create('person:tobie', {
	name: 'Tobie',
	settings: {
		active: true,
		marketing: true,
	},
});
