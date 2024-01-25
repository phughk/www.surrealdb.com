import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { drop } from '@ascua/tasks';

export default class extends Component {

	@tracked show;

	@tracked done;

	@tracked firstname;
	@tracked lastname;
	@tracked email;

	@drop * submit(event) {

		event.stopPropagation();

		event.preventDefault();

		if (!this.firstname) throw 'Please provide a first name';
		if (!this.lastname) throw 'Please provide a last name';
		if (!this.email) throw 'Please provide an email';

		yield fetch('https://form.surrealdb.com/b1167yg1864664e2nv8shudji2', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email,
			}),
		});

		this.firstname = null;
		this.lastname = null;
		this.email = null;
		this.done = true;

	}

}
