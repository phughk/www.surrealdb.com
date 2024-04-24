import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {
	@inject artist;

	@inject surreal;

	@action click() {
		if (document.body.hasAttribute('sidebar') === true) {
			document.body.removeAttribute('sidebar');
		}
	}
}
