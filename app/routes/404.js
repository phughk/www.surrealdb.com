import Route from '@ember/routing/route';

export default class extends Route {

	model({ path }) {

		const uri = path.toLowerCase();

		if (uri.startsWith('docs/')) {
			window.location.replace(uri);
		}

	}

}
