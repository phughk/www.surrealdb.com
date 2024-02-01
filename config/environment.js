'use strict';

module.exports = function (environment) {

	var ENV = {

		environment,
		rootURL: '/',
		locationType: 'history',
		modulePrefix: 'surreal',

		fastboot: {
			hostWhitelist: [
				'www.surrealdb.com',
				'surrealdb.com',
				/^localhost:\d+$/,
			],
		},

		// Surreal configuration details for
		// connecting to the correct namespace
		// and database on SurrealDB.

		surreal: {
			ns: 'surreal',
			db: 'surreal',
		},

		// Markdown file import details for
		// generating a markdown file tree from
		// a folder in the app workspace.

		mdfiles: {
			folders: {
				blog: 'app/blog',
				team: 'app/content/team',
				projects: 'app/content/projects',
				releases: 'app/content/releases',
			},
		},

		// Set the configuration options for
		// the @ascua/update addon, so that the
		// page can update when available.

		update: {
			enabled: true,
			autoupdate: true,
			frequency: 1 * 60 * 1000,
		},

		// Metric configuration details for
		// using Google analytics in the
		// production environment.

		metrics: [
			{
				name: 'gtag',
				environments: ['production'],
				config: {
					optimised: true,
					id: 'G-J1NWM32T1V',
				},
			},
			{
				name: 'linkedin',
				environments: ['production'],
				config: {
					optimised: true,
					id: '3271313',
				},
			},
			{
				name: 'twitter-pixel',
				environments: ['production'],
				config: {
					optimised: true,
					id: 'oexls',
				},
			},
		],

		// Set the configuration options for
		// the @ascua/webapp addon, so that the
		// favicons are created correctly.

		webapp: {
			background: '#181a1f',
			color: '#181a1f',
			description: '',
			display: 'standalone',
			enabled: true,
			mask: '#ff009e',
			name: 'SurrealDB',
			orientation: 'portrait',
			scope: '/',
			short: 'SurrealDB',
			start: '/',
			style: 'default',
		},

		// Set ember flags / options for the
		// ember runtime environment config

		APP: {
			BINDINGS: false,
			LOG_RESOLVER: false,
			LOG_TRANSITIONS: false,
			LOG_VIEW_LOOKUPS: false,
			LOG_ACTIVE_GENERATION: false,
			LOG_TRANSITIONS_INTERNAL: false,
			RAISE_ON_DEPRECATION: false,
			LOG_STACKTRACE_ON_DEPRECATION: false,
		},

		// Set experimental ember features
		// to be used when using ember
		// canary builds

		EmberENV: { FEATURES: {}, EXTEND_PROTOTYPES: { Date: false } },

	};

	if (environment === 'test') {
		ENV.APP.autoboot = false;
		ENV.locationType = 'none';
		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'development') {
		ENV.surreal.uri = 'https://surreal.io';
	}

	if (environment === 'production') {
		ENV.surreal.uri = 'https://surreal.io';
	}

	if (process.env.SURREAL) ENV.surreal.uri = process.env.SURREAL;

	return ENV;

};
