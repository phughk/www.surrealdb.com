import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SurrealistDownload extends Component {
	@action
	trackLinkedInConversion() {
		window.lintrk('track', { conversion_id: 18076041 });
	}
}
