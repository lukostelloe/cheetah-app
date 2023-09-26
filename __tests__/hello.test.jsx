// Hello.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "../src/pages/Hello";
import "@testing-library/jest-dom";

test("renders the Hello component", () => {
  render(<Hello />);
  const helloElement = screen.getByText("Hello, Jest!");
  expect(helloElement).toHaveTextContent("Hello, Jest!");
});
