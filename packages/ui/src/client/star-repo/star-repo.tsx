import * as React from "react";

interface Props {
	href: string;
}

/**
 * # StarRepo
 * button to star GitHub repo in a popup window/modal
 *
 * @param {React.ReactNode} [props.children]
 * @returns {React.ReactElement}
 */
export function StarRepo({ href }: Props) {
	return (
		<button
			data-testid="star-repo-h1"
			onClick={() => window.open(href, "", "height=400,width=1200,left=100,top=100")}>
			Star Repo
		</button>
	);
}
