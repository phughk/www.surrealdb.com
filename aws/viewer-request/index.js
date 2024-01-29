function handler(event) {

	var request = event.request;
	var headers = request.headers;
	var host = request.headers.host.value;

	if (host !== 'surrealdb.com') {

		return {
			statusCode: 301,
			statusDescription: 'Moved Permanently',
			headers: {
				location: {
					value: `https://surrealdb.com${request.uri}`
				}
			},
		};

	}

	if (request.uri.endsWith('/')) {
		request.uri = request.uri.concat('index.html');
		return request;
	}

	if (request.uri.indexOf('.') < request.uri.lastIndexOf('/')) {
		request.uri = request.uri.concat('/index.html');
		return request;
	}

	return request;

}
