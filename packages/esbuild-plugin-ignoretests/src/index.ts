import { Plugin } from "esbuild";

const rxp = /\.(test|spec|check)\./i;
type ignoretestsPluginOptions = {
	/** regExp to match file paths to be ignored */
	customRegExp: RegExp;
};

const ignoretestsPlugin: (options?: ignoretestsPluginOptions) => Plugin = options => ({
	name: "esbuild-react18-useclient",
	setup(build) {
		build.onResolve({ filter: options?.customRegExp || rxp }, args => {
			return { path: args.path, external: true };
		});
	},
});

export = ignoretestsPlugin;
