# For an in memory database
cargo add surrealdb --features kv-mem

# For a RocksDB file
cargo add surrealdb --features kv-rocksdb

# For a SpeeDB file
cargo add surrealdb --features kv-speedb

# For FoundationDB cluster (FoundationDB must be installed and the appropriate version selected)
cargo add surrealdb --features kv-fdb-7_1

# For a TiKV cluster (TiKV and other dependancies must be installed)
cargo add surrealdb --features kv-tikv