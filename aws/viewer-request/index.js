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

	let request = event.request;
	let host = request.headers.host.value;
	let path = request.uri.toLowerCase();

	if (host !== 'surrealdb.com') {
		return redirect(`https://surrealdb.com${path}`);
	}

	if (path.endsWith('/')) {
		path = path.slice(0, -1);
	}

	switch (path) {
		// Redirect root product pages
		case '/cf':
			return redirect('https://surrealdb.com/products/cf');
		case '/ix':
			return redirect('https://surrealdb.com/products/ix');
		case '/kv':
			return redirect('https://surrealdb.com/products/kv');
		case '/lq':
			return redirect('https://surrealdb.com/products/lq');
		case '/ml':
			return redirect('https://surrealdb.com/products/ml');
		case '/ql':
			return redirect('https://surrealdb.com/products/ql');
		// Redirect store url to Store
		case '/store':
			return redirect('https://surrealdb.store');
		// Redirect discord url to Discord
		case '/discord':
			return redirect('https://discord.gg/surrealdb');
		// Redirect github url to GitHub
		case '/github':
			return redirect('https://github.com/surrealdb/surrealdb');
		// Redirect base docs page to intro page
		case '/docs':
			return redirect('https://docs.surrealdb.com/docs/intro');
		// Redirect old websocket text protocol page
		case '/docs/integration/websocket/text':
			return redirect('https://docs.surrealdb.com/docs/integration/websocket');
		// Redirect old websocket binary protocol page
		case '/docs/integration/websocket/binary':
			return redirect('https://docs.surrealdb.com/docs/integration/websocket');
		// Redirect old DEFINE LOGIN statement page
		case '/docs/surrealql/statements/define/login':
			return redirect('https://docs.surrealdb.com/docs/surrealql/statements/define/user');
		// Redirect docs index pages to overview pages
		case '/docs/cli':
			return redirect('https://docs.surrealdb.com/docs/cli/overview');
		case '/docs/deployment':
			return redirect('https://docs.surrealdb.com/docs/deployment/overview');
		case '/docs/embedding':
			return redirect('https://docs.surrealdb.com/docs/embedding/overview');
		case '/docs/faqs':
			return redirect('https://docs.surrealdb.com/docs/faqs/overview');
		case '/docs/installation':
			return redirect('https://docs.surrealdb.com/docs/installation/overview');
		case '/docs/integration':
			return redirect('https://docs.surrealdb.com/docs/integration/overview');
		case '/docs/integration/sdks':
			return redirect('https://docs.surrealdb.com/docs/integration/sdks/overview');
		case '/docs/introduction':
			return redirect('https://docs.surrealdb.com/docs/introduction/overview');
		case '/docs/surrealql':
			return redirect('https://docs.surrealdb.com/docs/surrealql/overview');
		case '/docs/surrealql/datamodel':
			return redirect('https://docs.surrealdb.com/docs/surrealql/datamodel/overview');
		case '/docs/surrealql/functions':
			return redirect('https://docs.surrealdb.com/docs/surrealql/functions/overview');
		case '/docs/surrealql/statements':
			return redirect('https://docs.surrealdb.com/docs/surrealql/statements/overview');
	}

	switch (true) {
		// Redirect libraries pages to sdks
		case path.startsWith('/docs/integration/libraries/'):
			path = path.replace('libraries', 'sdks');
			return redirect(`https://docs.surrealdb.com${path}/`);
		// Redirect all other docs pages
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
