// Hello.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Settings from "../src/pages/Settings";
import "@testing-library/jest-dom";

test("renders the settings component", () => {
  render(<Settings />);

  expect(screen.getByText("settings")).toBeInTheDocument();
});
