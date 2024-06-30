import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe('Nav component', () => {
  it("renders correct link to home", () => {
    render(<Nav />);
    expect(screen.getByText('Urban Vibes')).toBeInTheDocument();
  });
  it('renders correct number of links in the navBar', () => {
    render(<Nav />);
    expect(screen.getByRole('menubar').childElementCount).toEqual(4);
  })
})