import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'surreal/config/environment';
import * as Sentry from '@sentry/ember';

if (window && window.location) {
	Sentry.init({
		dsn: "https://0fe0e9353babce33f5c128474af95ebf@o4506711289757696.ingest.sentry.io/4506711303127040",
		// Enable session replay
		integrations: [
			Sentry.replayIntegration({
				maskAllText: false,
				blockAllMedia: false,
				workerUrl: "/assets/replay-worker.js",
			}),
		],
		// Monitor performance for 100% of sessions
		tracesSampleRate: 1.0,
		// Enable session replays for 10% of all sessions
		replaysSessionSampleRate: 0.1,
		// Enable session replays for 100% of all sessions with errors
		replaysOnErrorSampleRate: 1.0,
	});
}

export default class App extends Application {
	modulePrefix = config.modulePrefix;
	podModulePrefix = config.podModulePrefix;
	Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
