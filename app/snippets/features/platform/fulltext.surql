-- Define a text analyzer
DEFINE ANALYZER en TOKENIZERS camel,class FILTERS snowball(English);

-- Define a search index for a field on the book table
DEFINE INDEX search_title ON book COLUMNS title SEARCH ANALYZER en BM25 HIGHLIGHTS;

-- Select all books who match given keywords
SELECT search::score(1) AS score, search::highlight('<b>', '</b>', 1) AS title
	FROM book WHERE title @1@ 'rust web' ORDER BY score DESC;
