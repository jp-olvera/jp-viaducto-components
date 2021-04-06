import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Spacer } from "../";

describe("<Spacer/>", () => {
	test("render", () => {
		render(<Spacer />);
	});
});
