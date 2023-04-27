export default {

	name: 'marked',

	initialize(instance) {

		marked.use({
			walkTokens(token) {
				if (token.type === 'heading') {
					token.depth = token.depth;
				}
			},
		});

		marked.use({
			renderer: {
				image(href, title, text) {
					return `<pic><img src="${href}" title="${title}" alt="${text}"></pic>`;
				},
			}
		});

		marked.setOptions({
			highlight(code, lang) {
				switch (lang) {
				case 'go':
					return Prism.highlight(code, Prism.languages.go, 'go');
				case 'javascript':
					return Prism.highlight(code, Prism.languages.javascript, 'javascript');
				case 'js':
					return Prism.highlight(code, Prism.languages.js, 'js');
				case 'json':
					return Prism.highlight(code, Prism.languages.json, 'json');
				case 'python':
					return Prism.highlight(code, Prism.languages.python, 'python');
				case 'rust':
					return Prism.highlight(code, Prism.languages.rust, 'rust');
				case 'rs':
					return Prism.highlight(code, Prism.languages.rust, 'rust');
				case 'shell':
					return Prism.highlight(code, Prism.languages.shell, 'shell');
				case 'sql':
					return Prism.highlight(code, Prism.languages.sql, 'sql');
				case 'surql':
					return Prism.highlight(code, Prism.languages.surql, 'surql');
				case 'docker':
					return Prism.highlight(code, Prism.languages.docker, 'docker');
				case 'toml':
					return Prism.highlight(code, Prism.languages.toml, 'toml');
				case 'yaml':
					return Prism.highlight(code, Prism.languages.yaml, 'yaml');
				case 'groovy':
					return Prism.highlight(code, Prism.languages.groovy, 'groovy');
				default:
					return code;
				}
			}
		});

	}

}
