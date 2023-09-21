import { Plugin } from "esbuild";

type ignoretestsPluginOptions = {
	/** regExp to match file paths to be ignored */
	customRegExp: RegExp;
};

/** This plugin prevents building test files by esbuild. DTS may still geenrate type files for the tests with only { } as file content*/
const ignoretestsPlugin: (options?: ignoretestsPluginOptions) => Plugin = options => ({
	name: "esbuild-plugin-ignoretests",
	setup(build) {
		const rxp = options?.customRegExp || /\.(test|spec|check)\./i;
		/** not able to mark files as external */
		// build.onResolve({ filter: options?.customRegExp || rxp }, args => {
		// 	return null;
		// });
		build.onLoad({ filter: rxp }, args => {
			/** remove content to avoid building/transpiling test files unnecessarily*/
			return { contents: "" };
		});
		build.onEnd(result => {
			result.outputFiles = result.outputFiles?.filter(f => !rxp.test(f.path));
		});
	},
});

export = ignoretestsPlugin;
