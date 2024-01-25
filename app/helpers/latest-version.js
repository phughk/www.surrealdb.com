import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject version;

	compute(args, opts) {
		switch (true) {
			case opts.name:
				return this.version.name;
			case opts.hash:
				return this.version.hash;
			case opts.slug:
				return this.version.slug;
			default:
				return this.version.latest;
		}
	}

}
