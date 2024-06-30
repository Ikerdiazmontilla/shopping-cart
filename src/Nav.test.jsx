import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";

describe('Nav component', () => {
  it("renders correct link to home", () => {
    render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );
    expect(screen.getByText('Urban Vibes')).toBeInTheDocument();
  });
  it('renders correct number of links in the navBar', () => {
    render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );
    expect(screen.getByRole('menubar').childElementCount).toEqual(4);
  })
})