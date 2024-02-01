import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Route {

	@inject mdfiles;

	@inject router;

	model() {
		return this.mdfiles.folder('jobs');
	}

	@action error() {
		return this.router.transitionTo('careers');
	}

}
