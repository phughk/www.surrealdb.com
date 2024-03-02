import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class extends Route {

	@inject mdfiles;

	@inject router;

	model(params) {

		let post = this.modelFor('blog').find(v => {
			return params.post_slug === v.attributes.slug;
		});

		if (post === undefined) {
			throw new Error(`The post '${params.post_slug}' was not found`);
		}

		if (post.path === undefined) {
			throw new Error(`The post '${params.post_slug}' had an invalid path`);
		}

		return fetch(path).then(data => {
			return data.json();
		});

	}

	@action error(error) {
		console.error(error);
		return this.router.transitionTo('blog');
	}

}
