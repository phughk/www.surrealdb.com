import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject fastboot;

	redirect() {

		// Get the page path
		let path = arguments[1].intent.url;

		// Check if this is an index page
		let index = arguments[1].to.name.endsWith('index');

		// The default location is the same
		let location = `https://docs.surrealdb.com${path}`;

		if (path === '/docs') {
			location = `https://docs.surrealdb.com/docs/intro`;
		} else if (index === true) {
			location = `https://docs.surrealdb.com${path}/overview`;
		}

		if (this.fastboot.isFastBoot) {
			this.fastboot.response.headers.set('location', location);
			this.fastboot.response.statusCode = 301;
		} else {
			window.location.replace(location);
		}

	}

}
