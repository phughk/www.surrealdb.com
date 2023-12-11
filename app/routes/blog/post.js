import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { slug } from 'surreal/utils/slug';

export default class extends Route {

	@inject mdfiles;

	model(params) {
		return this.mdfiles.folder('blog').then(files => {
			return files.map(v => {
				v.attributes.slug = slug(v.attributes.title);
				return v;
			}).find(v => {
				return params.post_slug === v.attributes.slug;
			});
		});
	}

}
