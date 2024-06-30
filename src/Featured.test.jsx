import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Featured from "./Featured";
import mockData from "./mockData";

describe("Featured component", () => {
  it('renders title', () => {
    render(<Featured data={[]} />);
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
  });

  it('renders 4 cards', () => {
    render(<Featured data={mockData} />);
    expect(screen.getByRole('wrapper').childNodes).toHaveLength(4);
  });
});
