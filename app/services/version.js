import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { cache } from '@ascua/decorators';

export default class Version extends Service {
	@tracked latest;

	@cache get hash() {
		return `#${this.slug}`;
	}

	@cache get slug() {
		return this.latest?.replace(/[.]/g, '-');
	}

	@cache get name() {
		return this.latest?.replace(/^v/g, '');
	}

	constructor() {
		super(...arguments);

		this.load();
	}

	async load() {
		try {
			let res = await fetch('https://version.surrealdb.com');

			let txt = await res.text();

			this.latest = txt.trim();
		} catch (e) {
			// Continue
		}
	}
}
