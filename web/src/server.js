import sirv from 'sirv';
import polka from 'polka';
import cors from 'cors';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const whitelist = [
	'https://flexible-content-blog-with-svelte-studio.netlify.com/',
	'http://flexible-content-blog-with-svelte-studio.netlify.com/',
	'https://flexible-content-blog-with-svelte-web.netlify.com',
	'http://flexible-content-blog-with-svelte-web.netlify.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		cors(corsOptions),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
