-- An ACL should be defined for any kind of resource (any record)
DEFINE FIELD resource ON TABLE acl TYPE record;
-- An ACL should be defined for a user
DEFINE FIELD user ON TABLE acl TYPE record<user>;

-- A user can have multiple permissions on an ACL
DEFINE FIELD permissions ON TABLE acl TYPE array
  -- The array must not be empty because at least one permission is required
  ASSERT array::len($value) > 0;

-- Assigned permissions are identified by strings
DEFINE FIELD permissions.* ON TABLE acl TYPE string
  -- Allow only these values in the array
  ASSERT $value INSIDE ["create", "read", "write", "delete"];

-- SEE IT IN ACTION
-- 1: Add a user
CREATE user:tobie SET firstName = 'Tobie', lastName = 'Hitchcock',
  email = 'Tobie.Hitchcock@surrealdb.com';
CREATE user:abc SET firstName = 'A', lastName = 'B',
  email = 'c@d.com';
-- 2: Create a resource
CREATE resource:write_to_some_queue SET
  name = "some messaging queue", type = ["read", "write"];
-- 3: Associate with ACL
CREATE acl SET user = user:tobie, resource = resource:write_to_some_queue, permissions = ["allow"];
CREATE acl SET user = user:abc, resource = resource:write_to_some_queue, permissions = ["deny"];

-- Assert failure examples
-- A: Create ACL without permissions field
CREATE acl SET user = user:tobie,
  permissions = [], # FAIL - permissions must not be empty
  resource = resource:write_to_some_queue;
-- B: Create resource with incorrect type
CREATE resource:random_some_database SET
  name = "some database",
  type = ["all"]; # FAIL - This is not a part of the array
