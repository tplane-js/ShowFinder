import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Alert Page link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Finder/i);
  expect(linkElement).toBeInTheDocument();
});
