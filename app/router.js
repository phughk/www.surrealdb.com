import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('about');
	this.route('careers');
	this.route('app');
	this.route('community');
	this.route('discord');
	this.route('features');
	this.route('github');
	this.route('install');
	this.route('license');
	this.route('media');
	this.route('opensource');
	this.route('releases');
	this.route('roadmap');
	this.route('snippet');
	this.route('store');
	this.route('why');

	this.route('who', function () {
		this.route('tobie');
		this.route('jaime');
	});

	this.route('blog', function () {
		this.route('post', { path: '/:post_slug' });
	});

	this.route('legal', function () {
		this.route('terms');
		this.route('privacy');
		this.route('cookies');
		this.route('security');
		this.route('giveaway');
	});

	this.route('usecase', function () {
		this.route('jamstack');
		this.route('serverless');
	});

	this.route('showcase', function () {
		this.route('modelling');
		this.route('surrealql');
		this.route('analytics');
		this.route('collaborate');
		this.route('permissions');
	});

	this.route('docs', function () {
		this.route('introduction', function () {
			this.route('start');
			this.route('concepts');
			this.route('features');
			this.route('releases');
			this.route('questions');
			this.route('architecture');
		});

		this.route('installation', function () {
			this.route('macos');
			this.route('linux');
			this.route('windows');
			this.route('nightly');
			this.route('running', function () {
				this.route('docker');
				this.route('memory');
				this.route('file');
				this.route('tikv');
			});
			this.route('upgrading', function () {
				this.route('beta8-to-beta9');
			});
		});

		this.route('authentication', function () {
			this.route('root');
			this.route('namespace');
			this.route('database');
			this.route('scope');
		});

		this.route('deployment', function () {
			this.route('google');
			this.route('amazon');
			this.route('kubernetes');
			this.route('heroku');
			this.route('digitalocean');
			this.route('fly');
		});

		this.route('embedding', function () {
			this.route('rust');
			this.route('node');
			this.route('javascript');
			this.route('python');
		});

		this.route('integration', function () {
			this.route('overview');
			this.route('http');
			this.route('websockets');
			this.route('websocket', function () {
				this.route('text');
				this.route('binary');
			});
			this.route('libraries', function () {
				this.route('platform', { path: '/:platform' });
			});
			this.route('sdks', function () {
				this.route('angular');
				this.route('apollo');
				this.route('c');
				this.route('dart');
				this.route('deno');
				this.route('dotnet');
				this.route('emberjs');
				this.route('erlang');
				this.route('flutter');
				this.route('golang');
				this.route('java');
				this.route('javascript');
				this.route('nestjs');
				this.route('nextjs');
				this.route('nodejs');
				this.route('nuxtjs');
				this.route('php');
				this.route('python');
				this.route('r');
				this.route('reactjs');
				this.route('ruby');
				this.route('rust');
				this.route('svelte');
				this.route('swift');
				this.route('vuejs');
			});
		});

		this.route('surrealql', function () {
			this.route('comments');
			this.route('operators');
			this.route('parameters');
			this.route('expressions');
			this.route('transactions');

			this.route('datamodel', function () {
				this.route('overview');
				this.route('ids');
				this.route('simple');
				this.route('numbers');
				this.route('strings');
				this.route('datetimes');
				this.route('formatters');
				this.route('uuids');
				this.route('objects');
				this.route('arrays');
				this.route('geometries');
				this.route('records');
				this.route('futures');
				this.route('casting');
			});

			this.route('statements', function () {
				this.route('use');
				this.route('let');
				this.route('info');
				this.route('begin');
				this.route('cancel');
				this.route('commit');
				this.route('ifelse');
				this.route('select');
				this.route('insert');
				this.route('create');
				this.route('update');
				this.route('relate');
				this.route('return');
				this.route('delete');

				this.route('define', function () {
					this.route('namespace');
					this.route('database');
					this.route('login');
					this.route('user');
					this.route('token');
					this.route('scope');
					this.route('table');
					this.route('event');
					this.route('function');
					this.route('field');
					this.route('analyzer');
					this.route('indexes');
					this.route('param');
				});

				this.route('remove');
				this.route('sleep');
			});

			this.route('functions', function () {
				this.route('array');
				this.route('count');
				this.route('crypto');
				this.route('duration');
				this.route('geo');
				this.route('http');
				this.route('validation');
				this.route('math');
				this.route('meta');
				this.route('parse');
				this.route('rand');
				this.route('search');
				this.route('session');
				this.route('string');
				this.route('time');
				this.route('type');
				this.route('script', function () {
					this.route('arguments');
					this.route('built-in-functions');
					this.route('context');
					this.route('type-conversion');
					this.route('surrealql-functions');
				});
				this.route('sleep');
				this.route('vector');
			});
			this.route('demo');
		});

		this.route('security', function () {
			this.route('paradigmes');
			this.route('scope-authentication');
			this.route('system-users');
		});

		this.route('cli', function () {
			this.route('start');
			this.route('import');
			this.route('export');
			this.route('backup');
			this.route('version');
			this.route('isready');
			this.route('sql');
			this.route('help');
			this.route('validate');
			this.route('upgrade');
		});

		this.route('guides', function () {
			this.route('schemafull-or-schemaless');
			this.route('relations-and-graph');
			this.route('realtime-subscriptions');
			this.route('geospatial-functionality');
			this.route('data-triggers');
			this.route('computed-views');
			this.route('authenticating-users');
			this.route('deploying-surrealdb');
			this.route('strict-mode');
		});

		this.route('faqs');
	});

	this.route('404', {
		path: '*:',
	});
});
