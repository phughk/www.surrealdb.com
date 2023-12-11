import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject fastboot;

	redirect({ path }) {

		let location = undefined;

		path = path.toLowerCase();

		switch (true) {
			// Redirect root product pages
			case path === 'cf':
			case path === 'kv':
			case path === 'lq':
			case path === 'ml':
			case path === 'ql':
				location = `/products/${path}`;
				break;
			// Redirect base docs page to intro page
			case path === 'docs':
				location = `https://docs.surrealdb.com/docs/intro`;
				break;
			// Redirect old websocket text protocol page
			case path === 'docs/integration/websocket/text':
				location = `https://docs.surrealdb.com/docs/integration/websocket`;
				break;
			// Redirect old websocket binary protocol page
			case path === 'docs/integration/websocket/binary':
				location = `https://docs.surrealdb.com/docs/integration/websocket`;
				break;
			// Redirect old DEFINE LOGIN statement page
			case path === 'docs/surrealql/statements/define/login':
				location = `https://docs.surrealdb.com/docs/surrealql/statements/define/user`;
				break;
			// Redirect docs index pages to overview pages
			case path === 'docs/cli':
			case path === 'docs/deployment':
			case path === 'docs/embedding':
			case path === 'docs/faqs':
			case path === 'docs/installation':
			case path === 'docs/integration':
			case path === 'docs/integration/sdks':
			case path === 'docs/introduction':
			case path === 'docs/surrealql':
			case path === 'docs/surrealql/datamodel':
			case path === 'docs/surrealql/functions':
			case path === 'docs/surrealql/statements':
				location = `https://docs.surrealdb.com/${path}/overview`;
				break;
		}

		if (location) {
			if (this.fastboot.isFastBoot) {
				this.fastboot.response.headers.set('location', location);
				this.fastboot.response.statusCode = 302;
			} else {
				window.location.replace(location);
			}
		}

	}

}
