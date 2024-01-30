import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject mdfiles;

	model() {
		return this.mdfiles.folder('team').then(data => {
			return data.sort((a, b) => {
				return a.attributes.sort - b.attributes.sort;
			});
		});
	}

}
