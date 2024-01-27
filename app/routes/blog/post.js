import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject mdfiles;

	model(params) {
		return this.mdfiles.file('blog',
			this.modelFor('blog').find(v => {
				return params.post_slug === v.attributes.slug;
			}).name
		);
	}

}
