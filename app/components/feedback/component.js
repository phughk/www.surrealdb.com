import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { drop } from '@ascua/tasks';

export default class FeedbackComponent extends Component {
	@service router;

	@tracked selectedCategory;
	@tracked isNewFeedBack = false;
	@tracked hasSavedFeedback = false;
	@tracked text;
	@tracked show = false;

	get isEmptyForm() {
		return !this.selectedCategory || !this.text;
	}

	@action
	toggleFeedbackForm() {
		this.show = !this.show;
		this.resetForm();
	}

	@action
	resetForm() {
		this.isNewFeedBack = true;
		this.hasSavedFeedback = false;
		this.selectedCategory;
		this.text = '';
	}

	@action
	setCategory(category) {
		this.selectedCategory = category;
	}

	@drop *submitFeedback() {
		if (!this.text) return;

		try {
			yield fetch('https://form.surrealdb.com/feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					type: this.selectedCategory,
					text: this.text,
					url: this.router.currentURL,
					date: new Date(),
				}),
			});

			this.hasSavedFeedback = true;
			this.isNewFeedBack = false;
		} catch {
			// catch error
		}
	}
}
