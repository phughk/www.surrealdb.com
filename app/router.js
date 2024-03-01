import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {

	// Base routes

	this.route('app');
	this.route('careers');
	this.route('community');
	this.route('features');
	this.route('install');
	this.route('license');
	this.route('media');
	this.route('opensource');
	this.route('releases');
	this.route('snippet');
	this.route('team');
	this.route('yaacomm');

	// Products routes

	this.route('products', function () {
		this.route('cf');
		this.route('ix');
		this.route('kv');
		this.route('lq');
		this.route('ml');
		this.route('ql');
	});

	// Legal routes

	this.route('legal', function () {
		this.route('terms');
		this.route('privacy');
		this.route('code-of-conduct');
		this.route('cookies');
		this.route('security');
		this.route('giveaway');
	});

	// Blog routes

	this.route('blog', function () {
		this.route('post', { path: '/:post_slug' });
	});

	// Other redirects

	this.route('404', {
		path: '*path',
	});

});
