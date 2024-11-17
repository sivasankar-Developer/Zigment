import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';


test("renders JSON Editor and Form Preview", () => {
  render(<App />);

  // Verify JSON Editor text
  expect(screen.getByText(/JSON Editor/i)).toBeInTheDocument();

  // Verify No valid schema provided text
  expect(screen.getByText(/No valid schema provided/i)).toBeInTheDocument();
});
