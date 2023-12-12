LET $fruits = {
	apple: {
		name: "Apple",
		stock: 20,
	},
	banana: {
		name: "Banana",
		stock: 40,
	},
};

LET $num_fruit_types = object::len($fruits);
LET $num_fruit_total = math::sum((
	SELECT VALUE stock FROM object::values($fruits)
));

RETURN "We have " + <string> $num_fruit_types + " type of fruits.";
RETURN "We have " + <string> $num_fruit_total + " pieces of fruit in total.";
