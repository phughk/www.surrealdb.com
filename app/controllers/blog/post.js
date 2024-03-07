import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { cache } from '@ascua/decorators';
import { slug } from 'surreal/utils/slug';

export default class extends Controller {

	@inject blog;

	@cache get headings() {
		// Get the blog post title
		let title = { type: 'heading', depth: 1, text: this.model.attributes.title };
		// Get the blog body titles
		let titles = marked.lexer(this.html).filter(section => {
			return section.type === 'heading' && (section.depth === 2 || section.depth === 3);
		});
		// Process all of the titles
		return [title, ...titles].map(heading => {
			return {
				text: heading.text,
				depth: heading.depth,
				id: slug(heading.text),
				link: '#' + slug(heading.text),
				children: [],
			};
		}).reduce((acc, val) => {
			switch (val.depth) {
				case 3:
					acc[acc.length - 1].children.push(val);
					break;
				default:
					acc.push(val);
					break;
			}
			return acc;
		}, []);
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
		return this.model.body || '';
	}

}
