import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Alert Page link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Alert Page/i);
  expect(linkElement).toBeInTheDocument();
});
