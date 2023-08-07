REMOVE NAMESPACE surrealdb;

REMOVE DATABASE blog;

REMOVE LOGIN writer ON NAMESPACE;

REMOVE USER writer ON NAMESPACE;

REMOVE TOKEN writer_token ON NAMESPACE;

REMOVE SCOPE documentation;

REMOVE TABLE article;

REMOVE EVENT new_post ON TABLE article;

REMOVE FUNCTION fn::update_author;

-- Only works for Schemaful tables (i.e. tables with a schema)
REMOVE FIELD tags ON TABLE article;

REMOVE INDEX authors ON TABLE article;

REMOVE PARAM $author;
