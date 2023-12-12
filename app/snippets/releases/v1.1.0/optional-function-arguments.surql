DEFINE FUNCTION fn::create::resource($required: string, $optional: option<string>) {
	// The $required argument is a string
	// The $optional argument is a string or NONE
};

// Previously you needed to pass NONE for optional arguments
fn::create::resource("Required argument", NONE);

// Now you simply omit the argument
fn::create::resource("Required argument");
