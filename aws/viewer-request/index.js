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

	// Only use the base domain, not subdomains
	if (host !== 'surrealdb.com') {
		return redirect(`https://surrealdb.com${path}`);
	}

	// Redirect any capitalised paths to lowercase
	if (path != request.uri) {
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
			return redirect('https://surrealdb.com/docs/surrealdb/intro');
		// Redirect old websocket text protocol page
		case '/docs/integration/websocket/text':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/websocket');
		// Redirect old websocket binary protocol page
		case '/docs/integration/websocket/binary':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/websocket');
		// Redirect old DEFINE LOGIN statement page
		case '/docs/surrealql/statements/define/login':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/statements/define/user');
		// Redirect docs index pages to overview pages
		case '/docs/cli':
			return redirect('https://surrealdb.com/docs/surrealdb/cli/overview');
		case '/docs/deployment':
			return redirect('https://surrealdb.com/docs/surrealdb/deployment/overview');
		case '/docs/embedding':
			return redirect('https://surrealdb.com/docs/surrealdb/embedding/overview');
		case '/docs/faqs':
			return redirect('https://surrealdb.com/docs/surrealdb/faqs/overview');
		case '/docs/installation':
			return redirect('https://surrealdb.com/docs/surrealdb/installation/overview');
		case '/docs/integration':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/overview');
		case '/docs/integration/sdks':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/sdks/overview');
		case '/docs/introduction':
			return redirect('https://surrealdb.com/docs/surrealdb/introduction/overview');
		case '/docs/surrealql':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/overview');
		case '/docs/surrealql/datamodel':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/datamodel/overview');
		case '/docs/surrealql/functions':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/functions/overview');
		case '/docs/surrealql/statements':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/statements/overview');
	}

	switch (true) {
		// Redirect libraries pages to sdks
		case path.startsWith('/docs/integration/libraries/'):
			path = '/docs/surrealdb/integration/sdks/' + path.slice(28);
			return redirect(`https://surrealdb.com${path}`);
		// Redirect all other docs pages
		case path.startsWith('/docs/'): {
			const second = path.split('/')[2];
			switch (second) {
				case 'surrealdb':
				case 'surrealml':
				case 'surrealist':
				case 'surrealism':
				case 'sdk':
				case 'assets':
				case 'img':
					break;
				default:
					return redirect(`https://surrealdb.com/docs/surrealdb/${path.slice(6)}`);
			}
		}
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
