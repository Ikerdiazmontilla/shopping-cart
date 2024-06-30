import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe("Home component", () => {
  it('renders title of main image and link to shop', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('Upgrade your style')).toBeInTheDocument();
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});



