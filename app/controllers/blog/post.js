import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { cache } from '@ascua/decorators';
import { slug } from 'surreal/utils/slug';

export default class extends Controller {

	@inject blog;

	@cache get headings() {
		return marked.lexer(this.html).filter(section => {
			return section.type === 'heading' && section.depth === 2;
		}).map(heading => {
			return {
				text: heading.text,
				id: slug(heading.text),
				link: '#' + slug(heading.text),
			};
		});
	}

	@cache get index() {
		return this.blog.posts.findIndex(post => post.attributes.title === this.model.attributes.title);
	}

	@cache get prev() {
		return this.blog.posts[this.index + 1] || null;
	}

	@cache get next() {
		return this.blog.posts[this.index - 1] || null;
	}

	@cache get html() {
		return this.model.content || '';
	}

}
