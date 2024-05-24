export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DGA5R-uQ.js","app":"_app/immutable/entry/app.B__Cqj-w.js","imports":["_app/immutable/entry/start.DGA5R-uQ.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/singletons.S_CQwNGg.js","_app/immutable/entry/app.B__Cqj-w.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/index.Bt9MCtE8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
