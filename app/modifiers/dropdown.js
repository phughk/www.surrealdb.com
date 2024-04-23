import { modifier } from 'ember-modifier';

export default modifier((element) => {
	element.addEventListener('mouseover', () => {
		console.log('asd');
		element.firstElementChild.classList.add('activate-dropdown');
	});

	element.addEventListener('mouseout', () => {
		element.firstElementChild.classList.remove('activate-dropdown');
	});
});
