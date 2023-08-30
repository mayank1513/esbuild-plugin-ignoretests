import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { StarRepo } from "./star-repo";

describe.concurrent("star-repo", () => {
	afterEach(cleanup);

	test("check if h1 heading exists", async ({ expect }) => {
		render(<StarRepo href="https://my-repo" />);
		expect(screen.getByTestId("star-repo-h1").textContent).toBe("Star Repo");
	});
});
