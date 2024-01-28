'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function (defaults) {
	const app = new EmberApp(defaults, {
		autoImport: {
			insertScriptsAt: 'auto-import-scripts',
		},
		sourcemaps: {
			enabled: false,
		},
		prember: {
			urls: async function ({ visit }) {
				return ['/404'].concat(await crawl({
					visit,
					startingFrom: ['/'],
					selector: 'a',
					exclude: new RegExp(/^.*((#.*)|(\.(txt|svg|png|jpg|jpeg|webp|mov|mp4)))$/),
				}))
			},
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
