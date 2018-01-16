/**
 * Created by luolinjia on 2018/1/16.
 */
const Koa = require('koa');
const app = new Koa();
const Config = require('./config/config');
const onerror = require('koa-onerror');
const middleware = require('koa-webpack');
const webpackDevConf = require('./build/webpack.dev.conf');
const history = require('./middleware/koa2-connect-history-api-fallback');

// handle the error message
onerror(app);

app.use(history({
	// 打出转发日志
	verbose: true
}));

// use webpack compile files
app.use(middleware({
	config: webpackDevConf,
	dev: {
		stats: {
			// print the related log color
			colors: true
		}
	}
}));

// print request info in console
app.use(async(ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(Config.node.port);