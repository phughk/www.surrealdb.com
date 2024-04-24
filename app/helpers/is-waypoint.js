import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {
	@inject waypoints;

	compute([name]) {
		return this.waypoints.last === name;
	}
}
