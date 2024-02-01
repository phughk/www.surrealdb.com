import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';

export default class extends Route {

	@inject mdfiles;

	model() {
		return this.mdfiles.folder('releases')
			.then(data => {
				return Promise.all(data.map(item => {
					return fetch(item.path).then(data => {
						return data.json();
					})
				}));
			}).then(data => {
				return data.map(data => {
					data.attributes.date = new Date(data.attributes.date);
					return data;
				});
			}).then(data => {
				return data.sort((a, b) => {
					return new Date(b.attributes.date) - new Date(a.attributes.date);
				});
			});
	}

}
