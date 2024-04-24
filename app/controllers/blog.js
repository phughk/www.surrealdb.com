import Controller from '@ember/controller';
import { cache } from '@ascua/decorators';

export default class extends Controller {
	@cache get posts() {
		return this.model
			.filter(Boolean)
			.filter((v) => v.attributes.show)
			.sort(
				(a, b) => dayjs(b.attributes.date) - dayjs(a.attributes.date),
			);
	}
}
