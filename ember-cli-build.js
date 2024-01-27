'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
	const app = new EmberApp(defaults, {
		autoImport: {
			insertScriptsAt: 'auto-import-scripts',
		},
		sourcemaps: {
			enabled: false,
		},
		prism: {
			copyToClipboard: true,
			theme: 'okaidia',
			languages: [
				'bash',
				'c',
				'csharp',
				'docker',
				'go',
				'groovy',
				'java',
				'javascript',
				'json',
				'python',
				'rust',
				'sql',
				'swift',
				'toml',
				'typescript',
				'yaml',
			],
		},
		snippetPaths: ['app/snippets'],
		snippetRegexes: {
			begin: /<Code[\w\d\s-]+@name="(\S+)"[^>]*>/,
			end: /<\/Code>/,
		},
		includeFileExtensionInSnippetNames: false,
	});

	return app.toTree();
};
