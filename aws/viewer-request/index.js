function redirect(location) {
	return {
		statusCode: 301,
		statusDescription: 'Moved Permanently',
		headers: {
			location: {
				value: location
			}
		},
	};
}

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

	switch (true) {
		// Redirect root product pages
		case request.uri === '/cf':
		case request.uri === '/kv':
		case request.uri === '/lq':
		case request.uri === '/ml':
		case request.uri === '/ql':
			return redirect(`/products/${request.uri}`);
		// Redirect base docs page to intro page
		case request.uri === '/docs':
			return redirect(`https://docs.surrealdb.com/docs/intro`);
		// Redirect old websocket text protocol page
		case request.uri === '/docs/integration/websocket/text':
			return redirect(`https://docs.surrealdb.com/docs/integration/websocket`);
		// Redirect old websocket binary protocol page
		case request.uri === '/docs/integration/websocket/binary':
			return redirect(`https://docs.surrealdb.com/docs/integration/websocket`);
		// Redirect old DEFINE LOGIN statement page
		case request.uri === '/docs/surrealql/statements/define/login':
			return redirect(`https://docs.surrealdb.com/docs/surrealql/statements/define/user`);
		// Redirect docs index pages to overview pages
		case request.uri === '/docs/cli':
		case request.uri === '/docs/deployment':
		case request.uri === '/docs/embedding':
		case request.uri === '/docs/faqs':
		case request.uri === '/docs/installation':
		case request.uri === '/docs/integration':
		case request.uri === '/docs/integration/sdks':
		case request.uri === '/docs/introduction':
		case request.uri === '/docs/surrealql':
		case request.uri === '/docs/surrealql/datamodel':
		case request.uri === '/docs/surrealql/functions':
		case request.uri === '/docs/surrealql/statements':
			return redirect(`https://docs.surrealdb.com/${request.uri}/overview`);
		case request.uri.startsWith('/docs/integration/libraries/'):
			return redirect(`https://docs.surrealdb.com/${request.uri.replace('libraries', 'sdks')}/`);
		case request.uri.startsWith('/docs/'):
			return redirect(`https://docs.surrealdb.com/${request.uri}/`);
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
