import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class extends Service {
	@tracked last = null;

	add(name) {
		this.last = name;
	}

	del(name) {
		// Ignore
	}
}
