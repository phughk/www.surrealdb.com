type Person = {
	id: string;
	name: string;
	settings: {
		active: boolean;
		marketing: boolean;
	};
};

// Insert a single record
const [person] = await db.insert<Person>('person', {
	name: 'Tobie',
	settings: {
		active: true,
		marketing: true,
	},
});

// Insert multiple records
const people = await db.insert<Person>('person', [
	{
		name: 'Tobie',
		settings: {
			active: true,
			marketing: true,
		},
	},
	{
		name: 'Jaime',
		settings: {
			active: true,
			marketing: true,
		},
	},
]);

// The content you are creating the record with might differ from the return type
const people = await db.insert<
	Person,
	Pick<Person, 'name'>
>('person', [
	{ name: 'Tobie' },
	{ name: 'Jaime' },
]);
