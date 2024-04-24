import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';

const slug = function (text) {
	return String(text)
		.replace(/[\s.]/gi, '-')
		.replace(/[^a-zA-Z0-9_-]+/g, '')
		.replace(/--/, '-')
		.toLowerCase();
};

export default class extends Component {
	@cache get markdown() {
		return marked.lexer(this.args.html || '').map((section) => {
			if (section.type === 'heading') {
				return Object.assign({}, section, {
					link: slug(section.text),
				});
			} else {
				return section;
			}
		});
	}
}
