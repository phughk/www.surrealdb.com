'use strict';

module.exports = function (environment) {

	var ENV = {

		environment,
		rootURL: '/',
		locationType: 'auto',
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
				name: 'google-analytics',
				environments: ['production'],
				config: {
					optimised: true,
					id: 'UA-159406644-1',
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
			{
				name: 'mixpanel',
				environments: ['production'],
				config: {
					optimised: true,
					id: 'be71b7f059b28f495cd2e087a59653a2',
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

		// Set the configuration options for
		// the @ascua/fastboot addon, so that a
		// content-security-policy can be set.

		CSP: {
			report: false,
			policy: {
				'base-uri': ["'self'"],
				'form-action': ["'none'"],
				'default-src': ["'self'"],
				'worker-src': ["'self'"],
				'img-src': [
					"'self'",
					// Brandsafe
					'https://cdn.brandsafe.io/',
					// Google
					'https://www.google-analytics.com/',
					// Linkedin
					'https://www.linkedin.com/px/',
					'https://*.ads.linkedin.com/',
				],
				'font-src': ["'self'"],
				'frame-src': [
					"'self'",
					// YouTube
					'https://youtube.com',
					'https://www.youtube.com',
				],
				'style-src': ["'self'"],
				'script-src': [
					"'self'",
					// Google
					'https://www.google-analytics.com/',
					// Mixpanel
					'https://cdn.mxpnl.com/',
				],
				'connect-src': [
					"'self'",
					// Surreal
					'wss://surreal.io/rpc',
					// Version
					'https://version.surrealdb.com',
					// Surreal
					'https://contact.surrealdb.com',
					// Google
					'https://www.google-analytics.com/',
					// Mixpanel
					'https://api.mixpanel.com',
				],
				'media-src': [
					"'self'",
					// Media
					'https://surrealdb.s3.amazonaws.com/',
				],
				'manifest-src': ["'self'"],
				'frame-ancestors': ["'self'"],
				'block-all-mixed-content': null,
				'upgrade-insecure-requests': null,
			},
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
