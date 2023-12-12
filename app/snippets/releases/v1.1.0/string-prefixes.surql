-- Interpeted as a record ID, because of the structure with the semicolon:
RETURN "5:20";
-- Forcefully parsed as just a string
RETURN s"5:20";

-- This will be a record ID.
RETURN r"person:john";
-- This fails, as it's not a valid record ID.
RETURN r"person:john";

-- Example for a date and a UUID.
RETURN d"2023-11-28T11:41:20.262Z";
RETURN u"8c54161f-d4fe-4a74-9409-ed1e137040c1";
