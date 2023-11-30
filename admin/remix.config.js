/** @type {import('@remix-run/dev').AppConfig} */
export default {
	ignoredRouteFiles: ['**/.*'],
	server: './server.ts',
	serverConditions: ['workerd', 'worker', 'browser'],
	serverDependenciesToBundle: [
		// bundle everything except the virtual module for the static content manifest provided by wrangler
		/^(?!.*\b__STATIC_CONTENT_MANIFEST\b).*$/,
		/^ag-grid-community\/dist\/styles\/ag-grid.css/,
		/^ag-grid-community\/dist\/styles\/ag-theme-alpine.css/,
	],
	serverMainFields: ['browser', 'module', 'main'],
	serverMinify: true,
	serverModuleFormat: 'esm',
	serverPlatform: 'neutral',
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	// serverBuildPath: "build/index.js",
};
