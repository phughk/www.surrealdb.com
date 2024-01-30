import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { slug } from 'surreal/utils/slug';

export default class extends Route {

	@inject mdfiles;

	@inject router;

	model() {
		return this.mdfiles.folder('blog').then(files => {
			return files.map(v => {
				v.attributes.slug = slug(v.attributes.title);
				return v;
			});
		});
	}

	@action error(error, transition) {
		return this.router.transitionTo('blog');
	}

}
