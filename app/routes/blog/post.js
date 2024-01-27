import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject mdfiles;

	model(params) {
		//
		let path = this.modelFor('blog').find(v => {
			return params.post_slug === v.attributes.slug;
		}).path;
		//
		return fetch(path).then(data => {
			return data.json();
		});
	}

}
