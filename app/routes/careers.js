import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject mdfiles;

	model() {
		return this.mdfiles.folder('jobs');
	}
}
