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

	let path = request.uri.toLowerCase();

	if (path.endsWith('/')) {
		path = path.slice(0, -1);
	}

	switch (true) {
		// Redirect root product pages
		case path === '/cf':
		case path === '/ix':
		case path === '/kv':
		case path === '/lq':
		case path === '/ml':
		case path === '/ql':
			return redirect(`https://surrealdb.com/products${path}`);
		// Redirect store url to Store
		case path === '/store':
			return redirect('https://surrealdb.store');
		// Redirect discord url to Discord
		case path === '/discord':
			return redirect('https://discord.gg/surrealdb');
		// Redirect github url to GitHub
		case path === '/github':
			return redirect('https://github.com/surrealdb/surrealdb');
		// Redirect base docs page to intro page
		case path === '/docs':
			return redirect(`https://docs.surrealdb.com/docs/intro`);
		// Redirect old websocket text protocol page
		case path === '/docs/integration/websocket/text':
			return redirect(`https://docs.surrealdb.com/docs/integration/websocket`);
		// Redirect old websocket binary protocol page
		case path === '/docs/integration/websocket/binary':
			return redirect(`https://docs.surrealdb.com/docs/integration/websocket`);
		// Redirect old DEFINE LOGIN statement page
		case path === '/docs/surrealql/statements/define/login':
			return redirect(`https://docs.surrealdb.com/docs/surrealql/statements/define/user`);
		// Redirect docs index pages to overview pages
		case path === '/docs/cli':
		case path === '/docs/deployment':
		case path === '/docs/embedding':
		case path === '/docs/faqs':
		case path === '/docs/installation':
		case path === '/docs/integration':
		case path === '/docs/integration/sdks':
		case path === '/docs/introduction':
		case path === '/docs/surrealql':
		case path === '/docs/surrealql/datamodel':
		case path === '/docs/surrealql/functions':
		case path === '/docs/surrealql/statements':
			return redirect(`https://docs.surrealdb.com${path}/overview`);
		case path.startsWith('/docs/integration/libraries/'):
			path = path.replace('libraries', 'sdks');
			return redirect(`https://docs.surrealdb.com${path}/`);
		case path.startsWith('/docs/'):
			return redirect(`https://docs.surrealdb.com${path}/`);
	}

	if (request.uri.endsWith('/') === true) {
		request.uri = request.uri.concat('index.html');
		return request;
	}

	if (request.uri.includes('.') === false) {
		request.uri = request.uri.concat('/index.html');
		return request;
	}

	return request;

}
