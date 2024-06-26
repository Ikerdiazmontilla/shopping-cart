import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("renders correct link to home", () => {
    render(<Home />);
    expect(screen.getByText('Urban Vibes')).toBeInTheDocument();
  });
  it('renders correct number of links in the navBar', () => {
    render(<Home />);
    expect(screen.getByRole('menubar').childElementCount).toEqual(4);
  })
  it('renders title of main image', () => {
    render(<Home />);
    expect(screen.getByText('Upgrade your style')).toBeInTheDocument()
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })
});

