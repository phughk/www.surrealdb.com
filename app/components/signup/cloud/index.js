import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { drop } from '@ascua/tasks';

export default class extends Component {
	@tracked show;

	@tracked done;

	@tracked firstname;
	@tracked lastname;
	@tracked email;
	@tracked jobtitle;
	@tracked companyname;

	@drop *submit(event) {
		event.stopPropagation();

		event.preventDefault();

		if (!this.firstname) throw 'Please provide a first name';
		if (!this.lastname) throw 'Please provide a last name';
		if (!this.email) throw 'Please provide an email';

		yield fetch('https://form.surrealdb.com/j7748et8593167h1hn9qyfbyi2', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email,
				jobtitle: this.jobtitle,
				companyname: this.companyname,
			}),
		});

		this.firstname = null;
		this.lastname = null;
		this.email = null;
		this.email = null;
		this.jobtitle = null;
		this.companyname = null;
		this.done = true;
	}
}
