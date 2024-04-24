import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class extends Route {
	@action error(error) {
		console.error(error);
		return false;
	}
}
