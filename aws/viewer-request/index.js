const exts = [
	'html',
	'js',
	'css',
	'png',
	'webp',
	'jpg',
	'jpeg',
	'xml',
	'svg',
	'json',
	'ico',
	'txt',
	'woff2',
	'woff',
	'ttf',
	'rss',
	'pdf',
];

const overviewBits = [
	'cli',
	'deployment',
	'embedding',
	'faqs',
	'installation',
	'integration',
	'integration/sdks',
	'introduction',
	'surrealql',
	'surrealql/datamodel',
	'surrealql/functions',
	'surrealql/statements',
];

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
		// Redirect old products page to cloud
		case '/products':
			return redirect('https://surrealdb.com/cloud');
		// Redirect root product pages
		case '/app':
			return redirect('https://surrealdb.com/surrealist');
		case '/products/surrealist':
			return redirect('https://surrealdb.com/surrealist');
		// Redirect root product pages
		case '/cf':
			return redirect('https://surrealdb.com/products/change-data-capture');
		case '/ix':
			return redirect('https://surrealdb.com/products/full-text-search');
		case '/lq':
			return redirect('https://surrealdb.com/products/realtime-data-sync');
		case '/ml':
			return redirect('https://surrealdb.com/products/machine-learning');
		case '/ql':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql');
		// Redirect older product pages
		case '/products/cf':
			return redirect('https://surrealdb.com/products/change-data-capture');
		case '/products/ix':
			return redirect('https://surrealdb.com/products/full-text-search');
		case '/products/lq':
			return redirect('https://surrealdb.com/products/realtime-data-sync');
		case '/products/ml':
			return redirect('https://surrealdb.com/products/machine-learning');
		case '/products/ql':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql');
		// Redirect store url to Store
		case '/store':
			return redirect('https://surrealdb.store');
		// Redirect discord url to Discord
		case '/discord':
			return redirect('https://discord.gg/surrealdb');
		// Redirect github url to GitHub
		case '/github':
			return redirect('https://github.com/surrealdb/surrealdb');
		// Redirect old websocket protocol page
		case '/docs/surrealdb/integration/websocket':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/rpc');
		// Redirect old websocket text protocol page
		case '/docs/integration/websocket/text':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/rpc');
		// Redirect old websocket binary protocol page
		case '/docs/integration/websocket/binary':
			return redirect('https://surrealdb.com/docs/surrealdb/integration/rpc');
		// Redirect old DEFINE LOGIN statement page
		case '/docs/surrealql/statements/define/login':
			return redirect('https://surrealdb.com/docs/surrealdb/surrealql/statements/define/user');
	}

	switch (true) {
		// Redirect libraries pages to sdks
		case path.startsWith('/docs/integration/libraries/'):
			path = '/docs/surrealdb/integration/sdks/' + path.slice(28);
			return redirect(`https://surrealdb.com${path}`);
		// Redirect all other docs pages
		case path.startsWith('/docs/'): {
			const splitted = path.split('/').slice(1);
			const second = splitted[1] || '';
			const third = splitted[2] || '';
			switch (second) {
				case 'surrealdb': {
					const base = 'https://surrealdb.com/docs/surrealdb/';
					const unversioned = splitted
						.slice(third && third.startsWith('1.') ? 3 : 2)
						.join('/') || '';

					// Remove /overview suffix
					if (
						overviewBits.find((a) => unversioned == a + '/overview')
					) {
						return redirect(base + unversioned.slice(0, -9));
					}

					// Remove /intro suffix
					if (unversioned == 'intro') {
						return redirect(base + unversioned.slice(0, -6));
					}

					if (unversioned.startsWith('how-to/')) {
						return redirect(
							base + 'tutorials' + unversioned.slice(6),
						);
					}

					// URL should already be good
					if (!third.startsWith('1.')) break;

					// Fix version in the URL
					return redirect(base + unversioned);
				}
				case 'sitemap.xml':
				case 'surrealml':
				case 'surrealist':
				case 'surrealism':
				case 'sdk':
				case 'assets':
				case 'img':
				case '':
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

	if (!exts.find((a) => request.uri.endsWith('.' + a))) {
		request.uri = request.uri.concat('/index.html');
		return request;
	}

	return request;
}
