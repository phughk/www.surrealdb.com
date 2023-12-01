// Creates a new client using a local endpoint
var db = new SurrealDbClient("http://127.0.0.1:8000");

// Creates a new client using a remote endpoint
var db = new SurrealDbClient("wss://cloud.surrealdb.com");