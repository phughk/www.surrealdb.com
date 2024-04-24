import Controller from '@ember/controller';
import { cache } from '@ascua/decorators';

export default class extends Controller {
	@cache get jobs() {
		return this.model
			.filter(Boolean)
			.filter((v) => v.attributes.show)
			.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else if (a.name > b.name) {
					return 1;
				} else {
					return 0;
				}
			});
	}
}
