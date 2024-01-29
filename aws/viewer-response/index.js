function handler(event) {

	var response = event.response;
	var headers = response.headers;

	headers['strict-transport-security'] = { value: 'max-age=31536000; includeSubdomains; preload' };
	headers['content-security-policy'] = { value: "base-uri 'self'; block-all-mixed-content; connect-src 'self' wss://surreal.io/rpc https://form.surrealdb.com https://version.surrealdb.com https://contact.surrealdb.com https://www.google-analytics.com/ https://analytics.google.com/ https://*.analytics.google.com/ https://stats.g.doubleclick.net/; default-src 'self'; font-src 'self'; form-action 'self'; frame-ancestors 'self'; frame-src 'self' https://youtube.com https://www.youtube.com https://player.vimeo.com; img-src 'self' https://cdn.brandsafe.io/ https://www.google-analytics.com/ https://t.co/ https://analytics.twitter.com/ https://www.google.co.uk/ads/ https://www.linkedin.com/px/ https://*.ads.linkedin.com/; manifest-src 'self'; media-src 'self' https://surrealdb.s3.amazonaws.com/; script-src 'self' https://www.google-analytics.com/ https://www.googletagmanager.com/ https://static.ads-twitter.com/ https://i.vimeocdn.com/; style-src 'self'; upgrade-insecure-requests; worker-src 'self'" };
	headers['permissions-policy'] = { value: "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()" };
	headers['x-content-type-options'] = { value: 'nosniff' };
	headers['x-frame-options'] = { value: 'DENY' };
	headers['x-xss-protection'] = { value: '1; mode=block' };
	headers['referrer-policy'] = { value: 'no-referrer' };

	delete headers['x-powered-by'];
	delete headers['expect-ct'];
	delete headers['server'];

	return response;

}
