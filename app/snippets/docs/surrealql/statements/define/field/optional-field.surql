-- A user may enter a biography, but it is not required.
-- By using the option type you also allow for NONE and NULL types.
DEFINE FIELD biography ON TABLE user TYPE option<string>;
