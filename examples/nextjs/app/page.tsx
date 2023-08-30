import { ForkMe } from "fork-me-react/server";
import { StarRepo } from "fork-me-react";

export default function Page(): JSX.Element {
	return (
		<div>
			<ForkMe href="https://github.com/mayank1513/esbuild-plugin-ignoretests" />
			<StarRepo href="https://github.com/mayank1513/esbuild-plugin-ignoretests" />
		</div>
	);
}
